import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DownloadIcon, StarIcon, UsersIcon, SparklesIcon } from "@/components/icons"

const apps = [
  {
    name: "FocusFlow",
    description:
      "A distraction-free learning environment with customizable timers, visual schedules, and calming backgrounds designed for children with ADHD.",
    category: "Productivity",
    downloads: "10K+",
    rating: 4.8,
    color: "from-blue-400 to-blue-600",
    image: "/app-focusflow.png",
  },
  {
    name: "SocialStories",
    description:
      "Interactive social stories that help children understand and navigate social situations with visual aids and audio narration.",
    category: "Social Skills",
    downloads: "8K+",
    rating: 4.9,
    color: "from-green-400 to-green-600",
    image: "/app-socialstories.png",
  },
  {
    name: "SensoryCalm",
    description:
      "A collection of sensory-friendly activities, sounds, and visuals to help children self-regulate and find calm during overwhelming moments.",
    category: "Wellness",
    downloads: "15K+",
    rating: 4.7,
    color: "from-purple-400 to-purple-600",
    image: "/app-sensorycalm.png",
  },
  {
    name: "MathQuest",
    description:
      "Gamified math learning with adaptive difficulty, visual representations, and positive reinforcement for children of all learning styles.",
    category: "Education",
    downloads: "12K+",
    rating: 4.6,
    color: "from-orange-400 to-orange-600",
    image: "/app-mathquest.png",
  },
  {
    name: "EmotionExplorer",
    description:
      "Help children identify and express emotions through interactive games, visual emotion charts, and guided breathing exercises.",
    category: "Emotional Learning",
    downloads: "9K+",
    rating: 4.8,
    color: "from-pink-400 to-pink-600",
    image: "/app-emotionexplorer.png",
  },
  {
    name: "RoutineBuilder",
    description:
      "Create visual daily routines with customizable icons, timers, and rewards to help children develop independence and structure.",
    category: "Life Skills",
    downloads: "11K+",
    rating: 4.7,
    color: "from-teal-400 to-teal-600",
    image: "/app-routinebuilder.png",
  },
  {
    name: "ReadingBuddy",
    description:
      "Accessible reading app with adjustable fonts, text-to-speech, and comprehension tools designed for dyslexic readers.",
    category: "Education",
    downloads: "7K+",
    rating: 4.9,
    color: "from-indigo-400 to-indigo-600",
    image: "/app-readingbuddy.png",
  },
  {
    name: "CommunicationCards",
    description:
      "AAC (Augmentative and Alternative Communication) tool with customizable picture cards and voice output for non-verbal children.",
    category: "Communication",
    downloads: "13K+",
    rating: 4.9,
    color: "from-yellow-400 to-yellow-600",
    image: "/app-communicationcards.png",
  },
  {
    name: "MovementBreaks",
    description:
      "Quick physical activities and stretches designed to help children release energy and refocus during learning or work time.",
    category: "Wellness",
    downloads: "6K+",
    rating: 4.6,
    color: "from-red-400 to-red-600",
    image: "/app-movementbreaks.png",
  },
  {
    name: "FriendshipSkills",
    description:
      "Interactive lessons and role-playing scenarios to help children develop friendship skills, empathy, and conflict resolution.",
    category: "Social Skills",
    downloads: "8K+",
    rating: 4.8,
    color: "from-cyan-400 to-cyan-600",
    image: "/app-friendshipskills.png",
  },
  {
    name: "SleepHelper",
    description:
      "Bedtime routines, calming sounds, and guided relaxation exercises to help children with sleep difficulties wind down peacefully.",
    category: "Wellness",
    downloads: "10K+",
    rating: 4.7,
    color: "from-violet-400 to-violet-600",
    image: "/app-sleephelper.png",
  },
  {
    name: "TaskMaster",
    description:
      "Break down complex tasks into manageable steps with visual checklists, timers, and celebration animations for completed tasks.",
    category: "Productivity",
    downloads: "9K+",
    rating: 4.8,
    color: "from-lime-400 to-lime-600",
    image: "/app-taskmaster.png",
  },
]

export default function ProductsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <SparklesIcon className="text-primary" size={20} />
            <span className="text-sm font-medium text-primary">Our Apps</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Apps Built with{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Understanding
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every app we create is designed with input from neurodivergent children, parents, educators, and therapists
            to ensure they truly meet the needs of our community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 text-center">
            <CardContent className="pt-6 space-y-2">
              <p className="text-4xl font-bold text-primary">12</p>
              <p className="text-muted-foreground">Apps Available</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-6 space-y-2">
              <p className="text-4xl font-bold text-primary">100K+</p>
              <p className="text-muted-foreground">Total Downloads</p>
            </CardContent>
          </Card>
          <Card className="border-2 text-center">
            <CardContent className="pt-6 space-y-2">
              <p className="text-4xl font-bold text-secondary-foreground">4.8</p>
              <p className="text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <Card key={app.name} className="border-2 hover:shadow-xl transition-all overflow-hidden group">
                <CardContent className="p-0">
                  {/* App Icon/Image */}
                  <div className={`h-48 bg-gradient-to-br ${app.color} flex items-center justify-center relative`}>
                    <div className="w-24 h-24 bg-white/90 rounded-3xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <SparklesIcon className="text-gray-700" size={48} />
                    </div>
                  </div>

                  {/* App Details */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-2xl font-bold">{app.name}</h3>
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full whitespace-nowrap">
                          {app.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <StarIcon className="text-yellow-500 fill-yellow-500" size={16} />
                        <span className="font-medium">{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DownloadIcon size={16} />
                        <span>{app.downloads}</span>
                      </div>
                    </div>

                    {/* Download Button */}
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                      <DownloadIcon className="mr-2" size={16} />
                      Download App
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Development Process</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              How we create apps that truly make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <UsersIcon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Community Input</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work directly with neurodivergent children, parents, and professionals to understand real needs and
                  challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="text-secondary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold">Accessible Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every interface is designed with accessibility in mind, from color contrast to navigation simplicity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <StarIcon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">User Testing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Children test our apps throughout development, ensuring they're intuitive, engaging, and helpful.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <DownloadIcon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold">Free Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All our apps are completely free to download and use, ensuring every child has access regardless of
                  financial situation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
