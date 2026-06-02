/*
  Quantyra - Nutanix NCA 6.10
  Practice Test E
  Banco separado para simulador.
*/

window.NCA_QUESTIONS_TEST_E = [
  {
    id: "NCA610-E-001",
    source: "Practice Test E",
    question: "Which storage container property determines data protection level?",
    options: [
      "Compression ratio determines data protection level for container",
      "Capacity limit determines data protection level for container",
      "Replication Factor determines data protection level for container",
      "Deduplication ratio determines data protection level for container"
    ],
    correctAnswers: ["Replication Factor determines data protection level for container"],
    multiple: false
  },
  {
    id: "NCA610-E-002",
    source: "Practice Test E",
    question: "What is the correct sequence to perform a health check before major changes?",
    options: [
      "Proceed with Changes > Run NCC Checks > Address Issues > Review Results",
      "Run NCC Checks > Review Results > Address Issues > Proceed with Changes",
      "Review Results > Run NCC Checks > Proceed with Changes > Address Issues",
      "Address Issues > Run NCC Checks > Review Results > Proceed with Changes"
    ],
    correctAnswers: ["Run NCC Checks > Review Results > Address Issues > Proceed with Changes"],
    multiple: false
  },
  {
    id: "NCA610-E-003",
    source: "Practice Test E",
    question: "Which network configuration is recommended for CVM connectivity?",
    options: [
      "Dual 1GbE networks for CVM connectivity",
      "Single 1GbE network for CVM connectivity",
      "Single 10GbE network for CVM connectivity",
      "Dual 10GbE networks for CVM connectivity"
    ],
    correctAnswers: ["Dual 10GbE networks for CVM connectivity"],
    multiple: false
  },
  {
    id: "NCA610-E-004",
    source: "Practice Test E",
    question: "Which two factors affect Shadow Clone creation? (Select two)",
    options: [
      "Data blocks being written to storage frequently",
      "Single VM accessing data blocks exclusively",
      "Data blocks being read frequently from storage",
      "Multiple VMs accessing identical data blocks concurrently"
    ],
    correctAnswers: [
      "Data blocks being read frequently from storage",
      "Multiple VMs accessing identical data blocks concurrently"
    ],
    multiple: true
  },
  {
    id: "NCA610-E-005",
    source: "Practice Test E",
    question: "What is the purpose of the Pithos service in Nutanix clusters?",
    options: [
      "Pithos manages virtual machine snapshots and clones",
      "Pithos provides distributed file system for VM storage",
      "Pithos controls network traffic and load balancing",
      "Pithos handles cluster metadata and configuration management"
    ],
    correctAnswers: ["Pithos manages virtual machine snapshots and clones"],
    multiple: false
  },
  {
    id: "NCA610-E-006",
    source: "Practice Test E",
    question: "What is the correct sequence to enable data-at-rest encryption on a cluster?",
    options: [
      "Enable Encryption > Verify License > Configure KMS > Rekey Data",
      "Rekey Data > Enable Encryption > Configure KMS > Verify License",
      "Configure KMS > Verify License > Rekey Data > Enable Encryption",
      "Verify License > Configure KMS > Enable Encryption > Rekey Data"
    ],
    correctAnswers: ["Verify License > Configure KMS > Enable Encryption > Rekey Data"],
    multiple: false
  },
  {
    id: "NCA610-E-007",
    source: "Practice Test E",
    question: "Which three services run on the Controller VM? (Select three)",
    options: [
      "VMkernel provides hypervisor functionality for VMs",
      "Curator performs data optimization and maintenance tasks",
      "Prism provides web-based management interface for cluster",
      "Stargate handles storage I/O operations and data management"
    ],
    correctAnswers: [
      "Curator performs data optimization and maintenance tasks",
      "Prism provides web-based management interface for cluster",
      "Stargate handles storage I/O operations and data management"
    ],
    multiple: true
  },
  {
    id: "NCA610-E-008",
    source: "Practice Test E",
    question: "Which Nutanix product provides file services with SMB and NFS protocols?",
    options: [
      "Nutanix Buckets provides file services with SMB and NFS",
      "Nutanix Volumes provides file services with SMB and NFS",
      "Nutanix Objects provides file services with SMB and NFS",
      "Nutanix Files provides file services with SMB and NFS"
    ],
    correctAnswers: ["Nutanix Files provides file services with SMB and NFS"],
    multiple: false
  },
  {
    id: "NCA610-E-009",
    source: "Practice Test E",
    question: "Which three components require firmware updates through LCM? (Select three)",
    options: [
      "Network interface card firmware on nodes",
      "BIOS firmware on cluster nodes",
      "Disk controller firmware on nodes",
      "Operating system kernel in guest VMs"
    ],
    correctAnswers: [
      "Network interface card firmware on nodes",
      "BIOS firmware on cluster nodes",
      "Disk controller firmware on nodes"
    ],
    multiple: true
  },
  {
    id: "NCA610-E-010",
    source: "Practice Test E",
    question: "What is the correct sequence to expand a storage container capacity?",
    options: [
      "Apply Changes > Increase Limit > View Properties > Select Container",
      "Increase Limit > Apply Changes > Select Container > View Properties",
      "View Properties > Select Container > Apply Changes > Increase Limit",
      "Select Container > View Properties > Increase Limit > Apply Changes"
    ],
    correctAnswers: ["Select Container > View Properties > Increase Limit > Apply Changes"],
    multiple: false
  },
  {
    id: "NCA610-E-011",
    source: "Practice Test E",
    question: "Which LCM feature allows scheduling updates during maintenance windows?",
    options: [
      "Timed execution schedules updates during maintenance windows",
      "Update scheduling schedules updates during maintenance windows",
      "Planned maintenance schedules updates during maintenance windows",
      "Auto-update schedules updates during maintenance windows"
    ],
    correctAnswers: ["Update scheduling schedules updates during maintenance windows"],
    multiple: false
  },
  {
    id: "NCA610-E-012",
    source: "Practice Test E",
    question: "Which LCM pre-check validates that all nodes are healthy before upgrading?",
    options: [
      "Cluster check validates node health before upgrade",
      "Version check validates node health before upgrade",
      "Connectivity check validates node health before upgrade",
      "Compatibility check validates node health before upgrade"
    ],
    correctAnswers: ["Cluster check validates node health before upgrade"],
    multiple: false
  },
  {
    id: "NCA610-E-013",
    source: "Practice Test E",
    question: "You need to check if a node can be safely removed. What should you verify?",
    options: [
      "Node has no running VMs or active workloads",
      "LCM shows node is outdated and needs replacement",
      "Cluster has sufficient capacity and RF after node removal",
      "Network connections are redundant across remaining nodes"
    ],
    correctAnswers: ["Cluster has sufficient capacity and RF after node removal"],
    multiple: false
  },
  {
    id: "NCA610-E-014",
    source: "Practice Test E",
    question: "What storage configuration provides the highest capacity efficiency?",
    options: [
      "RF2 with Erasure Coding provides highest capacity efficiency",
      "RF2 with compression provides highest capacity efficiency",
      "RF3 with compression provides highest capacity efficiency",
      "RF3 with deduplication provides highest capacity efficiency"
    ],
    correctAnswers: ["RF2 with Erasure Coding provides highest capacity efficiency"],
    multiple: false
  },
  {
    id: "NCA610-E-015",
    source: "Practice Test E",
    question: "What does the term Witness refer to in Nutanix stretched clusters?",
    options: [
      "Network device ensuring connectivity between sites",
      "Physical server providing quorum for split-brain prevention",
      "Service running on CVMs for metadata consistency",
      "Virtual machine monitoring cluster health status"
    ],
    correctAnswers: ["Physical server providing quorum for split-brain prevention"],
    multiple: false
  },
  {
    id: "NCA610-E-016",
    source: "Practice Test E",
    question: "You need to determine which license features are active. Where do you check this?",
    options: [
      "In Prism Settings under Licensing information page",
      "In LCM dashboard under license management section",
      "In Storage container under cluster features list",
      "In VM management under available capabilities section"
    ],
    correctAnswers: ["In Prism Settings under Licensing information page"],
    multiple: false
  },
  {
    id: "NCA610-E-017",
    source: "Practice Test E",
    question: "What is the minimum number of SSDs required per node in a hybrid cluster?",
    options: [
      "Four SSDs minimum required per node in hybrid",
      "Two SSDs minimum required per node in hybrid",
      "One SSD minimum required per node in hybrid",
      "Three SSDs minimum required per node in hybrid"
    ],
    correctAnswers: ["One SSD minimum required per node in hybrid"],
    multiple: false
  },
  {
    id: "NCA610-E-018",
    source: "Practice Test E",
    question: "You need to update VMware ESXi hosts through LCM. What prerequisite is required?",
    options: [
      "VMware licenses must be entered in LCM",
      "All VMs must be powered off first",
      "ESXi host must be in maintenance mode",
      "vCenter Server must be registered with Prism"
    ],
    correctAnswers: ["vCenter Server must be registered with Prism"],
    multiple: false
  },
  {
    id: "NCA610-E-019",
    source: "Practice Test E",
    question: "Which two metrics are key indicators of cluster health? (Select two)",
    options: [
      "Storage capacity usage and remaining runway estimate",
      "Number of powered-on virtual machines in cluster",
      "Cluster CPU utilization percentage across all nodes",
      "Total network bandwidth consumed by VMs"
    ],
    correctAnswers: [
      "Storage capacity usage and remaining runway estimate",
      "Cluster CPU utilization percentage across all nodes"
    ],
    multiple: true
  },
  {
    id: "NCA610-E-020",
    source: "Practice Test E",
    question: "What storage efficiency feature converts RF2 data to a parity-based scheme?",
    options: [
      "Deduplication converts RF2 to parity-based scheme",
      "Compression converts RF2 to parity-based scheme",
      "Thin Provisioning converts RF2 to parity-based scheme",
      "Erasure Coding converts RF2 to parity-based scheme"
    ],
    correctAnswers: ["Erasure Coding converts RF2 to parity-based scheme"],
    multiple: false
  },
  {
    id: "NCA610-E-021",
    source: "Practice Test E",
    question: "What is the correct sequence to investigate a performance degradation issue?",
    options: [
      "Identify Symptoms > Check Recent Changes > Review Metrics > Apply Solution",
      "Check Recent Changes > Identify Symptoms > Apply Solution > Review Metrics",
      "Review Metrics > Apply Solution > Identify Symptoms > Check Recent Changes",
      "Apply Solution > Review Metrics > Check Recent Changes > Identify Symptoms"
    ],
    correctAnswers: ["Identify Symptoms > Check Recent Changes > Review Metrics > Apply Solution"],
    multiple: false
  },
  {
    id: "NCA610-E-022",
    source: "Practice Test E",
    question: "Which metric indicates storage performance bottlenecks in Prism?",
    options: [
      "Storage capacity metrics indicate performance bottlenecks clearly",
      "Storage efficiency metrics indicate performance bottlenecks clearly",
      "Storage latency metrics indicate performance bottlenecks clearly",
      "Storage redundancy metrics indicate performance bottlenecks clearly"
    ],
    correctAnswers: ["Storage latency metrics indicate performance bottlenecks clearly"],
    multiple: false
  },
  {
    id: "NCA610-E-023",
    source: "Practice Test E",
    question: "You need to identify which VMs are consuming the most storage. Where do you find this information?",
    options: [
      "In LCM inventory and capacity reports",
      "In VM list sorted by storage usage",
      "In Network configuration and bandwidth usage",
      "In Storage container details and analytics"
    ],
    correctAnswers: ["In VM list sorted by storage usage"],
    multiple: false
  },
  {
    id: "NCA610-E-024",
    source: "Practice Test E",
    question: "Which alert severity requires acknowledgement before it is cleared?",
    options: [
      "All alerts require acknowledgement before clearing automatically",
      "Warning alerts require acknowledgement before clearing automatically",
      "Informational alerts require acknowledgement before clearing automatically",
      "Critical alerts require acknowledgement before clearing automatically"
    ],
    correctAnswers: ["Critical alerts require acknowledgement before clearing automatically"],
    multiple: false
  },
  {
    id: "NCA610-E-025",
    source: "Practice Test E",
    question: "Which LCM inventory status indicates a component is behind the current release?",
    options: [
      "Pending status indicates component behind current release",
      "Legacy status indicates component behind current release",
      "Available status indicates component behind current release",
      "Outdated status indicates component behind current release"
    ],
    correctAnswers: ["Outdated status indicates component behind current release"],
    multiple: false
  },
  {
    id: "NCA610-E-026",
    source: "Practice Test E",
    question: "You need to generate a cluster configuration report for audit purposes. What is the correct sequence?",
    options: [
      "Access Reports > Select Configuration > Choose Components > Generate Report",
      "Select Configuration > Choose Components > Access Reports > Generate Report",
      "Choose Components > Generate Report > Access Reports > Select Configuration",
      "Generate Report > Access Reports > Select Configuration > Choose Components"
    ],
    correctAnswers: ["Access Reports > Select Configuration > Choose Components > Generate Report"],
    multiple: false
  },
  {
    id: "NCA610-E-027",
    source: "Practice Test E",
    question: "Which storage optimization technique is best for sequential workloads?",
    options: [
      "Compression works best for sequential write workloads",
      "Erasure Coding works best for sequential write workloads",
      "Deduplication works best for sequential write workloads",
      "Thin Provisioning works best for sequential write workloads"
    ],
    correctAnswers: ["Compression works best for sequential write workloads"],
    multiple: false
  },
  {
    id: "NCA610-E-028",
    source: "Practice Test E",
    question: "Which alert configuration determines when notifications are sent?",
    options: [
      "Alert destinations determine when notifications are sent",
      "Alert policies determine when notifications are sent",
      "Alert triggers determine when notifications are sent",
      "Alert severity determines when notifications are sent"
    ],
    correctAnswers: ["Alert policies determine when notifications are sent"],
    multiple: false
  },
  {
    id: "NCA610-E-029",
    source: "Practice Test E",
    question: "What is the correct sequence to troubleshoot VM network connectivity issues?",
    options: [
      "Check Physical Network > Verify VM Network Config > Review Logs > Test Connectivity",
      "Test Connectivity > Verify VM Network Config > Check Physical Network > Review Logs",
      "Review Logs > Test Connectivity > Check Physical Network > Verify VM Network Config",
      "Verify VM Network Config > Check Physical Network > Test Connectivity > Review Logs"
    ],
    correctAnswers: ["Verify VM Network Config > Check Physical Network > Test Connectivity > Review Logs"],
    multiple: false
  },
  {
    id: "NCA610-E-030",
    source: "Practice Test E",
    question: "What is the function of the Cassandra service in Nutanix clusters?",
    options: [
      "Handles storage I/O operations and data placement",
      "Provides distributed database for cluster metadata and configuration",
      "Manages virtual machine migration and load balancing",
      "Controls network traffic routing between nodes"
    ],
    correctAnswers: ["Provides distributed database for cluster metadata and configuration"],
    multiple: false
  },
  {
    id: "NCA610-E-031",
    source: "Practice Test E",
    question: "Which hypervisor feature allows hot-add of CPU and memory to VMs?",
    options: [
      "VMware hot-plug allows adding CPU and memory to running VMs",
      "Neither hypervisor supports hot-add for production VMs",
      "Both VMware and AHV support hot-add functionality",
      "AHV hot-add allows adding CPU and memory to running VMs"
    ],
    correctAnswers: ["Both VMware and AHV support hot-add functionality"],
    multiple: false
  },
  {
    id: "NCA610-E-032",
    source: "Practice Test E",
    question: "What storage feature automatically moves cold data to lower-cost tiers?",
    options: [
      "Intelligent Lifecycle Management automatically moves cold data to lower tiers",
      "Deduplication automatically moves cold data to lower tiers",
      "Thin provisioning automatically moves cold data to lower tiers",
      "Data compression automatically moves cold data to lower tiers"
    ],
    correctAnswers: ["Intelligent Lifecycle Management automatically moves cold data to lower tiers"],
    multiple: false
  },
  {
    id: "NCA610-E-033",
    source: "Practice Test E",
    question: "Which two alert severity levels exist in Prism? (Select two)",
    options: [
      "Informational severity for general system events",
      "Critical severity for urgent issues requiring attention",
      "Debug severity for development troubleshooting purposes",
      "Warning severity for potential issues to monitor"
    ],
    correctAnswers: [
      "Critical severity for urgent issues requiring attention",
      "Warning severity for potential issues to monitor"
    ],
    multiple: true
  },
  {
    id: "NCA610-E-034",
    source: "Practice Test E",
    question: "You need to create multiple VMs quickly for testing. What is the most efficient method?",
    options: [
      "Create snapshots and restore them as new VMs",
      "Export VMs and import as new instances",
      "Create linked clones sharing a common base disk",
      "Create full clones for complete VM independence"
    ],
    correctAnswers: ["Create linked clones sharing a common base disk"],
    multiple: false
  },
  {
    id: "NCA610-E-035",
    source: "Practice Test E",
    question: "Which VM power operation allows graceful shutdown with guest OS awareness?",
    options: [
      "Force Shutdown allows graceful guest-aware shutdown",
      "Hard Power Off allows graceful guest-aware shutdown",
      "Power Cycle allows graceful guest-aware shutdown",
      "Guest Shutdown allows graceful guest-aware shutdown"
    ],
    correctAnswers: ["Guest Shutdown allows graceful guest-aware shutdown"],
    multiple: false
  },
  {
    id: "NCA610-E-036",
    source: "Practice Test E",
    question: "What is the correct sequence to configure SNMP for alert monitoring?",
    options: [
      "Test Configuration > Add Trap Destinations > SNMP Configuration > Access Settings",
      "Add Trap Destinations > Access Settings > SNMP Configuration > Test Configuration",
      "SNMP Configuration > Test Configuration > Access Settings > Add Trap Destinations",
      "Access Settings > SNMP Configuration > Add Trap Destinations > Test Configuration"
    ],
    correctAnswers: ["Access Settings > SNMP Configuration > Add Trap Destinations > Test Configuration"],
    multiple: false
  },
  {
    id: "NCA610-E-037",
    source: "Practice Test E",
    question: "What is the function of the Zookeeper service in Nutanix clusters?",
    options: [
      "Coordinates distributed operations and maintains cluster state",
      "Manages network traffic routing and load balancing",
      "Handles user authentication and authorization requests",
      "Provides storage I/O operations and data management"
    ],
    correctAnswers: ["Coordinates distributed operations and maintains cluster state"],
    multiple: false
  },
  {
    id: "NCA610-E-038",
    source: "Practice Test E",
    question: "What is the purpose of the Genesis service in Nutanix clusters?",
    options: [
      "Genesis handles storage I/O and data placement operations",
      "Genesis bootstraps cluster formation and manages cluster lifecycle",
      "Genesis provides web interface for cluster management tasks",
      "Genesis coordinates VM migration and high availability features"
    ],
    correctAnswers: ["Genesis bootstraps cluster formation and manages cluster lifecycle"],
    multiple: false
  },
  {
    id: "NCA610-E-039",
    source: "Practice Test E",
    question: "Which command-line tool is used to manage Nutanix clusters from CVM?",
    options: [
      "ncli is used to manage clusters from CVM",
      "esxcli is used to manage clusters from CVM",
      "acli is used to manage clusters from CVM",
      "Both ncli and acli are used from CVM"
    ],
    correctAnswers: ["ncli is used to manage clusters from CVM"],
    multiple: false
  },
  {
    id: "NCA610-E-040",
    source: "Practice Test E",
    question: "What is the function of the Medusa service in Nutanix clusters?",
    options: [
      "Medusa provides authentication and authorization services for users",
      "Medusa manages distributed storage metadata across cluster nodes",
      "Medusa handles VM migration and high availability operations",
      "Medusa controls network traffic routing between VMs"
    ],
    correctAnswers: ["Medusa manages distributed storage metadata across cluster nodes"],
    multiple: false
  },
  {
    id: "NCA610-E-041",
    source: "Practice Test E",
    question: "What is the correct sequence to create a protection domain for VMs?",
    options: [
      "Create Protection Domain > Select VMs > Set Retention > Configure Schedule",
      "Configure Schedule > Create Protection Domain > Select VMs > Set Retention",
      "Set Retention > Select VMs > Configure Schedule > Create Protection Domain",
      "Select VMs > Create Protection Domain > Configure Schedule > Set Retention"
    ],
    correctAnswers: ["Create Protection Domain > Select VMs > Set Retention > Configure Schedule"],
    multiple: false
  },
  {
    id: "NCA610-E-042",
    source: "Practice Test E",
    question: "What is the correct sequence to enable deduplication on a storage container?",
    options: [
      "Monitor Results > Configure Schedule > Select Container > Enable Deduplication",
      "Select Container > Enable Deduplication > Configure Schedule > Monitor Results",
      "Configure Schedule > Enable Deduplication > Select Container > Monitor Results",
      "Enable Deduplication > Select Container > Monitor Results > Configure Schedule"
    ],
    correctAnswers: ["Select Container > Enable Deduplication > Configure Schedule > Monitor Results"],
    multiple: false
  },
  {
    id: "NCA610-E-043",
    source: "Practice Test E",
    question: "What is the correct sequence to recover from a failed node in the cluster?",
    options: [
      "Remove Node > Identify Failed Node > Verify Data Integrity > Add Replacement",
      "Identify Failed Node > Verify Data Integrity > Remove Node > Add Replacement",
      "Add Replacement > Remove Node > Verify Data Integrity > Identify Failed Node",
      "Verify Data Integrity > Identify Failed Node > Add Replacement > Remove Node"
    ],
    correctAnswers: ["Identify Failed Node > Verify Data Integrity > Remove Node > Add Replacement"],
    multiple: false
  },
  {
    id: "NCA610-E-044",
    source: "Practice Test E",
    question: "What alert action sends notifications to external monitoring systems via HTTP?",
    options: [
      "SNMP action sends notifications via HTTP to external systems",
      "Webhook action sends notifications via HTTP to external systems",
      "Syslog action sends notifications via HTTP to external systems",
      "Email action sends notifications via HTTP to external systems"
    ],
    correctAnswers: ["Webhook action sends notifications via HTTP to external systems"],
    multiple: false
  },
  {
    id: "NCA610-E-045",
    source: "Practice Test E",
    question: "What happens to running VMs when you upgrade AOS using LCM?",
    options: [
      "VMs are automatically migrated to non-upgraded nodes",
      "VMs are paused until the upgrade completes",
      "VMs continue running with minimal impact during rolling upgrade",
      "All VMs are shut down during the upgrade"
    ],
    correctAnswers: ["VMs continue running with minimal impact during rolling upgrade"],
    multiple: false
  },
  {
    id: "NCA610-E-046",
    source: "Practice Test E",
    question: "Your cluster capacity runway shows 30 days remaining. What should be your immediate action?",
    options: [
      "Immediately order additional nodes for installation",
      "Plan capacity expansion within the next few weeks",
      "Wait until 10 days remaining before taking action",
      "Enable compression to extend runway automatically"
    ],
    correctAnswers: ["Plan capacity expansion within the next few weeks"],
    multiple: false
  },
  {
    id: "NCA610-E-047",
    source: "Practice Test E",
    question: "Which LCM update method requires manual download of update packages?",
    options: [
      "Automated update requires manual package download process",
      "Dark Site update requires manual package download process",
      "One-click update requires manual package download process",
      "Scheduled update requires manual package download process"
    ],
    correctAnswers: ["Dark Site update requires manual package download process"],
    multiple: false
  },
  {
    id: "NCA610-E-048",
    source: "Practice Test E",
    question: "You receive a critical alert for CVM down. What is the immediate impact?",
    options: [
      "Entire cluster becomes unavailable for management",
      "VMs on that node stop running immediately",
      "Storage I/O from that node is impacted",
      "Network connectivity for all VMs is lost"
    ],
    correctAnswers: ["Storage I/O from that node is impacted"],
    multiple: false
  },
  {
    id: "NCA610-E-049",
    source: "Practice Test E",
    question: "What is the purpose of the Stargate service in Nutanix architecture?",
    options: [
      "Stargate handles all storage I/O operations for VMs",
      "Stargate coordinates VM migration and HA operations",
      "Stargate provides web interface for cluster management",
      "Stargate manages cluster-wide metadata and configuration"
    ],
    correctAnswers: ["Stargate handles all storage I/O operations for VMs"],
    multiple: false
  },
  {
    id: "NCA610-E-050",
    source: "Practice Test E",
    question: "You need to migrate VMs from another hypervisor to AHV. Which tool should you use?",
    options: [
      "Nutanix Flow for VM migration to AHV clusters",
      "Nutanix Files for VM migration to AHV clusters",
      "Nutanix Move for VM migration to AHV clusters",
      "Nutanix Mine for VM migration to AHV clusters"
    ],
    correctAnswers: ["Nutanix Move for VM migration to AHV clusters"],
    multiple: false
  }
];

// Alias temporal para probar este banco directamente en el simulador actual.
// En la versión multi-banco final, este alias puede eliminarse y usar question_banks.js.
window.NCA_QUESTIONS = window.NCA_QUESTIONS_TEST_E;
