import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function About() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative h-[400px] w-full">
        <Image
          src="/chicago-downtown.jpg"
          alt="Chicago downtown skyline"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-end justify-center pb-1">
          <h1
            className={`${playfair.className} text-white text-6xl tracking-wide drop-shadow-lg`}
          >
            About Me
          </h1>
        </div>
      </section>

      {/* About Image Section */}
      <section className="py-16 flex justify-center px-4">
        <Image
          src="/fullstackdevelop-image.jpg"
          alt="Profile photo"
          width={500}
          height={500}
          className="rounded-2xl shadow-2xl object-cover"
        />
      </section>

      {/* Summary Section */}
      <section className="py-16 px-4 text-center">
        <h2
          className={`${playfair.className} text-4xl text-gray-900 mb-6`}
        >
          Summary
        </h2>

        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-600">
          Passionate full-stack developer focused on building scalable,
          performant, and user-centered web applications with modern
          technologies and clean design principles.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2
          className={`${playfair.className} text-4xl text-gray-900 text-center mb-10`}
        >
          Technical Skills
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">

          <p>
            <span className="font-semibold">● Cloud:</span> AWS: EC2, S3, VPC, ELB, EBS, EFS, IAM, Route53, Autoscale, Cloudwatch, CloudFormation, Elasticsearch...
          </p>

          <p>
            <span className="font-semibold">● Virtualization:</span> VMware 6.5, ESXi, XEN, KVM, VirtualBox...
          </p>

          <p>
            <span className="font-semibold">● Package management:</span> Installation, patching, compilation using rpm/yum
          </p>

          <p>
            <span className="font-semibold">● OS:</span> Linux RHEL/CentOS/Ubuntu, Microsoft Windows
          </p>

          <p>
            <span className="font-semibold">● Automation:</span> Kickstart, Ansible, Bash, Python (beginner)
          </p>

          <p>
            <span className="font-semibold">● Servers:</span> Apache, Nginx, DNS, FTP, DHCP, NFS, MySQL, MariaDB, LDAP, SMTP, SSH, HTTP
          </p>

          <p>
            <span className="font-semibold">● Monitoring tools:</span> Nagios, Centreon, Kibana, Grafana
          </p>

          <p>
            <span className="font-semibold">● Security:</span> AWS IAM, NACLs, SG; LDAP; AD; SELinux; Firewalld; Keycloak, Keeper
          </p>

          <p>
            <span className="font-semibold">● Disk management:</span> LVM, RAID, SAN, NAS
          </p>

          <p>
            <span className="font-semibold">● DevOps:</span> CI/CD pipeline - Jenkins, Maven, Selenium, GitHub, Ansible, AWS CloudFormation, AWS CodePipeline
          </p>

          <p>
            <span className="font-semibold">● Ticketing tools:</span> Nagios, Jira, ServiceNow, PagerDuty
          </p>

          <p>
            <span className="font-semibold">● Troubleshooting:</span> ping, top, df, du, lsof, dmesg, netstat, ss, ssh, free, traceroute, fsck, dracut, xfs_repair, curl, sar...
          </p>

        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2
          className={`${playfair.className} text-4xl text-gray-900 text-center mb-12`}
        >
          Experience
        </h2>

        {/* Job 1 */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-gray-900">
            Code Fish, Des Plaines IL
          </h3>
          <p className="text-gray-500 mb-4">
            DevOps Consultant | 01/2024 – Present
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
            <li>
              DevOps coaching: Linux/RHEL, AWS, Terraform, Ansible, Docker,
              Kubernetes, Jenkins, GitHub Actions.
            </li>
            <li>
              Configured webhooks integrating AWS Lambda (Node.js), API Gateway, and Slack.
            </li>
            <li>
              Implemented full-stack development using HTML, CSS, JS, LAMP, and MEAN stacks.
            </li>
            <li>
              Deployed three-tier architecture on AWS using Terraform, Kubernetes, and GitHub repositories.
            </li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="mb-14">
          <h3 className="text-xl font-semibold text-gray-900">
            Reveal Data, Chicago IL
          </h3>
          <p className="text-gray-500 mb-4">
            Site Reliability Engineer | 11/2021 – 02/2023
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Built CI/CD pipelines using GitHub Actions, Spacelift, Kubernetes, Argo CD, Helm, Terraform, Ansible improving deployment frequency by 20%.
            </li>
            <li>
              Containerized applications using Docker and deployed via Helm charts in Kubernetes environments.
            </li>
            <li>
              Managed production incidents using PagerDuty and provided 24/7 on-call support (more than 100 hours volunteered).
            </li>
            <li>
              Maintained 99.8% uptime using Zabbix monitoring and proactive alert resolution.
            </li>
            <li>
              Collaborated with Dev and Security teams for deployments ensuring 99.9% uptime and compliance.
            </li>
            <li>
              Mentored junior engineers improving team efficiency by 20%.
            </li>
          </ul>
        </div>

        {/* Job 3 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Axon / Sundance International, Greater Chicago Area IL
          </h3>
          <p className="text-gray-500 mb-4">
            Linux Systems Engineer | 06/2015 – 10/2021
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Managed 800 physical and 3000+ virtual Linux servers (RHEL/CentOS).
            </li>
            <li>
              Installed and maintained LAMP stack using PXE boot, Kickstart, YUM, and RPM.
            </li>
            <li>
              Resolved 1000+ incidents related to DNS, DHCP, FTP, SFTP, LDAP, SSH, and networking.
            </li>
            <li>
              Improved system performance and reduced downtime by 25% through troubleshooting and optimization.
            </li>
            <li>
              Built AWS infrastructure including EC2, S3, VPC, Route53, and security components.
            </li>
            <li>
              Participated in 100+ on-call shifts resolving critical incidents in production environments.
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}