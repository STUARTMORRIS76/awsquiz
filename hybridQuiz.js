const awsQuiz = [
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides a dedicated network connection from your premises to AWS?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS Transit Gateway"
    ],
    answer: 1,
    explanation: "AWS Direct Connect establishes a dedicated, high-throughput connection between your data center and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "What is the primary benefit of AWS Site-to-Site VPN?",
    choices: [
      "Low latency",
      "Dedicated bandwidth",
      "Encrypted connection over the internet",
      "Global traffic acceleration"
    ],
    answer: 2,
    explanation: "Site-to-Site VPN provides secure, encrypted connectivity over the public internet between your network and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect multiple VPCs and on-premises networks through a central hub?",
    choices: [
      "AWS Direct Connect",
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS Global Accelerator"
    ],
    answer: 2,
    explanation: "AWS Transit Gateway simplifies network architecture by acting as a central hub for VPC and on-premises connectivity."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service helps accelerate global application traffic using the AWS global network?",
    choices: [
      "AWS Direct Connect",
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator improves performance and availability by routing traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "What does AWS PrivateLink primarily provide?",
    choices: [
      "Public internet access",
      "Secure access to services over private IPs",
      "Cross-region VPC peering",
      "DNS resolution for hybrid networks"
    ],
    answer: 1,
    explanation: "AWS PrivateLink enables private connectivity to services across VPCs without exposing traffic to the public internet."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to peer two VPCs together for private communication?",
    choices: [
      "AWS Transit Gateway",
      "Amazon VPC Peering",
      "AWS Direct Connect",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Amazon VPC Peering enables private connectivity between two VPCs using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows DNS-based routing across hybrid environments?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "Amazon Route 53 provides DNS-based routing and health checks across hybrid and global environments."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports BGP for dynamic routing in hybrid networks?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon Route 53",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Direct Connect supports Border Gateway Protocol (BGP) for dynamic routing between AWS and on-premises networks."
  },
  {
    category: "Hybrid Networking",
    question: "What is a key advantage of using AWS Transit Gateway over VPC Peering?",
    choices: [
      "Lower latency",
      "Simplified hub-and-spoke architecture",
      "Dedicated bandwidth",
      "Encrypted traffic"
    ],
    answer: 1,
    explanation: "Transit Gateway simplifies network management by allowing centralized connectivity between multiple VPCs and on-premises networks."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to expose services in one VPC to another using private IPs?",
    choices: [
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS PrivateLink allows secure access to services across VPCs using private IP addresses, without traversing the public internet."
  },
  
    {
    category: "Hybrid Networking",
    question: "Which protocol is commonly used with AWS Direct Connect for dynamic routing?",
    choices: [
      "OSPF",
      "EIGRP",
      "BGP",
      "RIP"
    ],
    answer: 2,
    explanation: "Border Gateway Protocol (BGP) is used with AWS Direct Connect to exchange routing information dynamically."
  },
  {
    category: "Hybrid Networking",
    question: "What does a Transit Gateway attachment represent?",
    choices: [
      "A VPN tunnel",
      "A VPC or Direct Connect connection",
      "A DNS record",
      "An IAM role"
    ],
    answer: 1,
    explanation: "A Transit Gateway attachment represents a connection between the Transit Gateway and a VPC, Direct Connect gateway, or VPN."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to create encrypted tunnels between your network and AWS?",
    choices: [
      "AWS Direct Connect",
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS VPN creates encrypted tunnels over the internet between your on-premises network and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to privately access AWS services from your VPC without using public IPs?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private access to AWS services over private IPs within your VPC."
  },
  {
    category: "Hybrid Networking",
    question: "What is the maximum number of VPCs you can connect using VPC Peering in a full mesh?",
    choices: [
      "10",
      "50",
      "100",
      "It depends on the region"
    ],
    answer: 3,
    explanation: "The number of VPC peering connections in a full mesh depends on the region and account limits, but it becomes complex to manage at scale."
  },
  {
    category: "Hybrid Networking",
    question: "Which service is recommended for large-scale VPC connectivity?",
    choices: [
      "VPC Peering",
      "AWS VPN",
      "AWS Transit Gateway",
      "AWS Direct Connect"
    ],
    answer: 2,
    explanation: "AWS Transit Gateway is designed for scalable VPC and hybrid connectivity, simplifying network architecture."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to route traffic based on latency or geographic location?",
    choices: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports latency-based and geolocation routing policies for directing traffic efficiently."
  },
  {
    category: "Hybrid Networking",
    question: "What is a key benefit of AWS Global Accelerator over CloudFront?",
    choices: [
      "Caching content",
      "Improved DNS resolution",
      "Static IP addresses and TCP/UDP acceleration",
      "Lower storage costs"
    ],
    answer: 2,
    explanation: "AWS Global Accelerator provides static IPs and accelerates TCP/UDP traffic using the AWS global network."
  },
  {
    category: "Hybrid Networking",
    question: "Which service helps you connect your on-premises network to AWS using IPsec tunnels?",
    choices: [
      "AWS Direct Connect",
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service can be used to create a private endpoint for a service hosted in another VPC?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink allows you to create private endpoints to access services across VPCs securely."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to use static IP addresses for global applications?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IP addresses and routes traffic through the optimal AWS edge location."
  },
  {
    category: "Hybrid Networking",
    question: "What is the purpose of a Direct Connect Gateway?",
    choices: [
      "To encrypt VPN tunnels",
      "To connect Direct Connect to multiple VPCs across regions",
      "To manage IAM roles",
      "To route DNS queries"
    ],
    answer: 1,
    explanation: "A Direct Connect Gateway allows you to connect your Direct Connect connection to multiple VPCs across AWS regions."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports accelerated TCP and UDP traffic?",
    choices: [
      "AWS VPN",
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS Transit Gateway"
    ],
    answer: 2,
    explanation: "AWS Global Accelerator accelerates TCP and UDP traffic using the AWS global network."
  },
  {
    category: "Hybrid Networking",
    question: "Which service provides DNS failover capabilities for hybrid environments?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports DNS failover to redirect traffic in case of endpoint failure."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to create a private endpoint for a service hosted in another VPC?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private connectivity between VPCs using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "What is the maximum bandwidth supported by AWS Direct Connect?",
    choices: [
      "1 Gbps",
      "10 Gbps",
      "100 Gbps",
      "500 Mbps"
    ],
    answer: 2,
    explanation: "AWS Direct Connect supports up to 100 Gbps connections depending on location and configuration."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect your on-premises network to AWS using the public internet?",
    choices: [
      "AWS Direct Connect",
      "AWS VPN",
      "AWS PrivateLink",
      "AWS Transit Gateway"
    ],
    answer: 1,
    explanation: "AWS VPN uses the public internet to create secure, encrypted tunnels between your network and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to route traffic to the closest healthy endpoint?",
    choices: [
      "Amazon Route 53",
      "AWS Global Accelerator",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports routing policies like latency-based and geolocation routing to direct traffic to the closest healthy endpoint."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across AWS accounts?",
    choices: [
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon VPC Peering",
      "AWS Transit Gateway"
    ],
    answer: 3,
    explanation: "AWS Transit Gateway supports inter-VPC connectivity across multiple AWS accounts using resource sharing."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to monitor network traffic and performance across hybrid connections?",
    choices: [
      "AWS CloudWatch",
      "AWS VPN",
      "AWS Direct Connect",
      "AWS Transit Gateway Network Manager"
    ],
    answer: 3,
    explanation: "AWS Transit Gateway Network Manager provides visibility into your global network, including on-premises and AWS connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to centrally manage connectivity across multiple AWS accounts and regions?",
    choices: [
      "AWS Direct Connect",
      "AWS Transit Gateway",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway enables centralized connectivity management across multiple accounts and regions."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect your on-premises network to AWS using a dedicated fiber connection?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Direct Connect provides a dedicated fiber connection between your data center and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports route propagation to simplify routing configuration?",
    choices: [
      "AWS VPN",
      "AWS Transit Gateway",
      "Amazon Route 53",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports route propagation to automatically update route tables."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create a private endpoint for accessing AWS services without using public IPs?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private access to AWS services using private IPs within your VPC."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to monitor and visualize your global network topology?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway Network Manager provides visibility into your global network topology and performance."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across different AWS regions?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports inter-region peering to connect VPCs across different AWS regions."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides health checks and DNS-based routing for hybrid applications?",
    choices: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Amazon Route 53 offers health checks and routing policies to manage traffic across hybrid environments."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create encrypted tunnels over the internet to connect to AWS?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS over the internet."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for global applications?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect multiple VPCs and on-premises networks using a hub-and-spoke model?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway simplifies network architecture by acting as a central hub for VPC and hybrid connectivity."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to connect your on-premises network to AWS using IPsec tunnels?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS over the internet."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create a centralized hub for VPC and on-premises connectivity?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway acts as a central hub for connecting multiple VPCs and on-premises networks."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for routing global traffic?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to privately access AWS services from your VPC?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private access to AWS services over private IPs within your VPC."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports geolocation-based routing for DNS queries?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports geolocation routing to direct users to endpoints based on their geographic location."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across AWS accounts and regions?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports inter-region and cross-account VPC connectivity using resource sharing."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides centralized monitoring of hybrid network connections?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Transit Gateway Network Manager offers centralized monitoring and visualization of your global network."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create encrypted tunnels over the internet to AWS?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports latency-based routing for DNS queries?",
    choices: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports latency-based routing to direct traffic to the lowest-latency endpoint."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to expose services in one VPC to another using private IPs?",
    choices: [
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS PrivateLink enables secure access to services across VPCs using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to connect your on-premises network to AWS using a dedicated connection?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Direct Connect provides a dedicated, high-bandwidth connection between your data center and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to route traffic based on health checks and latency?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports health checks and latency-based routing to improve application availability."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports centralized routing between VPCs and on-premises networks?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway enables centralized routing and simplifies network architecture for hybrid environments."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to access AWS services privately without traversing the public internet?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink provides private connectivity to AWS services using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports IPsec tunnels for secure communication?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect multiple VPCs using a hub-and-spoke model?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway enables scalable VPC connectivity using a hub-and-spoke architecture."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for global traffic routing?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across different AWS accounts?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports cross-account VPC connectivity using resource sharing."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to monitor and visualize your hybrid network topology?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Transit Gateway Network Manager provides visibility into your global network, including AWS and on-premises connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create encrypted tunnels over the internet to AWS?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to connect your on-premises network to AWS using a dedicated fiber connection?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Direct Connect provides a dedicated fiber connection between your data center and AWS for consistent performance."
  },
  {
    category: "Hybrid Networking",
    question: "Which service supports centralized routing and policy control across multiple VPCs?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway allows centralized routing and policy control across multiple VPCs and hybrid connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides DNS-based routing and health checks?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 offers DNS-based routing and health checks to improve application reliability."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to privately access AWS services from your VPC?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private connectivity to AWS services over private IPs within your VPC."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports IPsec tunnels for secure hybrid connectivity?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across AWS accounts and regions using a hub-and-spoke model?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports scalable, centralized connectivity across accounts and regions."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for global traffic routing?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to monitor and visualize your hybrid network topology?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Transit Gateway Network Manager provides visibility into your global network, including AWS and on-premises connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports latency-based routing for DNS queries?",
    choices: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports latency-based routing to direct traffic to the lowest-latency endpoint."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to expose services in one VPC to another using private IPs?",
    choices: [
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS PrivateLink enables secure access to services across VPCs using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to connect your on-premises network to AWS using IPsec tunnels?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS over the internet."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect multiple VPCs and on-premises networks using a central hub?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway simplifies network architecture by acting as a central hub for VPC and hybrid connectivity."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for global traffic routing?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to privately access AWS services from your VPC?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private access to AWS services over private IPs within your VPC."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports geolocation-based routing for DNS queries?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports geolocation routing to direct users to endpoints based on their geographic location."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across AWS accounts and regions?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports scalable, centralized connectivity across accounts and regions."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides centralized monitoring of hybrid network connections?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Transit Gateway Network Manager offers centralized monitoring and visualization of your global network."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create encrypted tunnels over the internet to AWS?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports latency-based routing for DNS queries?",
    choices: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports latency-based routing to direct traffic to the lowest-latency endpoint."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to expose services in one VPC to another using private IPs?",
    choices: [
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS PrivateLink enables secure access to services across VPCs using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to connect your on-premises network to AWS using a dedicated connection?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Direct Connect provides a dedicated, high-bandwidth connection between your data center and AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to route traffic based on health checks and latency?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports health checks and latency-based routing to improve application availability."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports centralized routing between VPCs and on-premises networks?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway enables centralized routing and simplifies network architecture for hybrid environments."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to access AWS services privately without traversing the public internet?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink provides private connectivity to AWS services using private IP addresses."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports IPsec tunnels for secure communication?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect multiple VPCs using a hub-and-spoke model?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway enables scalable VPC connectivity using a hub-and-spoke architecture."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for global traffic routing?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across different AWS accounts?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports cross-account VPC connectivity using resource sharing."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to monitor and visualize your hybrid network topology?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Transit Gateway Network Manager provides visibility into your global network, including AWS and on-premises connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to create encrypted tunnels over the internet to AWS?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service allows you to connect your on-premises network to AWS using a dedicated fiber connection?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Direct Connect provides a dedicated fiber connection between your data center and AWS for consistent performance."
  },
  {
    category: "Hybrid Networking",
    question: "Which service supports centralized routing and policy control across multiple VPCs?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS Global Accelerator"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway allows centralized routing and policy control across multiple VPCs and hybrid connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides DNS-based routing and health checks?",
    choices: [
      "AWS VPN",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "Amazon Route 53 offers DNS-based routing and health checks to improve application reliability."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to privately access AWS services from your VPC?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 2,
    explanation: "AWS PrivateLink enables private connectivity to AWS services over private IPs within your VPC."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports IPsec tunnels for secure hybrid connectivity?",
    choices: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS PrivateLink",
      "Amazon Route 53"
    ],
    answer: 0,
    explanation: "AWS VPN uses IPsec tunnels to securely connect your on-premises network to AWS."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to connect VPCs across AWS accounts and regions using a hub-and-spoke model?",
    choices: [
      "Amazon VPC Peering",
      "AWS Transit Gateway",
      "AWS VPN",
      "AWS PrivateLink"
    ],
    answer: 1,
    explanation: "AWS Transit Gateway supports scalable, centralized connectivity across accounts and regions."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service provides static IP addresses for global traffic routing?",
    choices: [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS VPN",
      "Amazon Route 53"
    ],
    answer: 1,
    explanation: "AWS Global Accelerator provides static IPs and routes traffic through optimal AWS edge locations."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to monitor and visualize your hybrid network topology?",
    choices: [
      "AWS CloudWatch",
      "AWS Transit Gateway Network Manager",
      "Amazon Route 53",
      "AWS VPN"
    ],
    answer: 1,
    explanation: "Transit Gateway Network Manager provides visibility into your global network, including AWS and on-premises connections."
  },
  {
    category: "Hybrid Networking",
    question: "Which AWS service supports latency-based routing for DNS queries?",
    choices: [
      "AWS Global Accelerator",
      "Amazon Route 53",
      "AWS VPN",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "Amazon Route 53 supports latency-based routing to direct traffic to the lowest-latency endpoint."
  },
  {
    category: "Hybrid Networking",
    question: "Which service allows you to expose services in one VPC to another using private IPs?",
    choices: [
      "AWS VPN",
      "AWS PrivateLink",
      "Amazon Route 53",
      "AWS Direct Connect"
    ],
    answer: 1,
    explanation: "AWS PrivateLink enables secure access to services across VPCs using private IP addresses."
  }
];
