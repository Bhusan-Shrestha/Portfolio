import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Server, Wifi, Database, Lock, Network } from "lucide-react"

export default function NetworkingExpertise() {
  const expertiseAreas = [
    {
      title: "Network Security",
      description:
        "Implementation of security measures to protect network infrastructure from unauthorized access, misuse, and attacks.",
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      skills: ["Firewall Configuration", "Intrusion Detection", "VPN Setup", "Security Auditing"],
    },
    {
      title: "Network Infrastructure",
      description: "Design and implementation of robust network architectures for optimal performance and reliability.",
      icon: <Server className="h-10 w-10 text-blue-500" />,
      skills: ["Routing & Switching", "VLAN Configuration", "Network Monitoring", "Load Balancing"],
    },
    {
      title: "Wireless Networking",
      description: "Setup and optimization of wireless networks for maximum coverage, security, and performance.",
      icon: <Wifi className="h-10 w-10 text-blue-500" />,
      skills: ["Wi-Fi Security", "Signal Optimization", "Wireless Protocols", "Mesh Networks"],
    },
    {
      title: "Data Management",
      description: "Implementation of secure data storage, transfer, and backup solutions across networks.",
      icon: <Database className="h-10 w-10 text-blue-500" />,
      skills: ["Data Encryption", "Secure Transfer Protocols", "Backup Solutions", "Data Recovery"],
    },
    {
      title: "Cybersecurity",
      description: "Protection of systems, networks, and programs from digital attacks and unauthorized access.",
      icon: <Lock className="h-10 w-10 text-blue-500" />,
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Policies", "Incident Response"],
    },
    {
      title: "Network Protocols",
      description: "Expert knowledge of communication protocols that govern data exchange across networks.",
      icon: <Network className="h-10 w-10 text-blue-500" />,
      skills: ["TCP/IP", "HTTP/HTTPS", "DNS", "DHCP", "SNMP"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {expertiseAreas.map((area, index) => (
        <Card
          key={index}
          className="border-none bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
        >
          <CardHeader className="pb-2">
            <div className="flex items-center gap-4">
              {area.icon}
              <CardTitle className="text-xl text-white">{area.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-gray-300 mb-4">{area.description}</CardDescription>
            <div className="flex flex-wrap gap-2">
              {area.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} className="bg-blue-900/50 hover:bg-blue-800/50 text-blue-100">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

