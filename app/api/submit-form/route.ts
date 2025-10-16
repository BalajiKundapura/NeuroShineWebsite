import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_DBaAsrMK_MYgbfLHn4Cq1ZVLrw9YKYoRe")

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const emailContent = `
      New ${data.formType} Form Submission from NeuroShine Website
      
      ${Object.entries(data)
        .filter(([key]) => key !== "formType")
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n")}
    `

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "Neuroshine <Neuroshine@resend.dev>",
      to: process.env.ADMIN_EMAIL || "neuroshine.official@gmail.com",
      subject: `New ${data.formType} Submission - NeuroShine`,
      text: emailContent,
    })

    console.log("Email sent successfully:", emailResult)

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully and email sent",
      emailId: emailResult.data?.id,
    })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error submitting form: " + (error instanceof Error ? error.message : "Unknown error"),
      },
      { status: 500 },
    )
  }
}
