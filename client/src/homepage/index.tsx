import "./index.scss";
import { HomepageHero } from "./homepage-hero";
import { useLocale } from "../hooks";

export function Homepage(props) {
  const locale = useLocale();
  return (
    <main id="content" role="main">
      <div className="homepage mdn-ui-body-m">
        <HomepageHero />
        <div className="featured-articles">
          <h2 className="mdn-ui-emphasis-l">Featured Articles</h2>
          <div className="tile-container">
            <div className="article-tile">
              <a href={`/${locale}/docs/Learn/Linux`} className="tile-tag">
                Linux
              </a>
              <a
                href={`/${locale}/docs/Learn/Linux/Booting_Process/`}
                className="tile-title expand-this-link"
              >
                Linux Booting Process
              </a>
              <p>
                Booting Process is the sequence process of Booting the computer
                system.And it includes the list of process performed by the
                computer hardware/software from the time of "Power-On" to the
                load Operating System completely ready for users to run
                applications.And below are the list of step by step process
                involved in Booting Process.
              </p>
              <p>* Power Supply</p>
              <p>* Basic Input Output System -BIOS</p>
              <p>* Booting Record/Partition Table</p>
              <p>* Bootloader - GRUB</p>
              <p>* Kernel</p>
              <p>* Init</p>
              <p>* RunLevel Programs</p>
            </div>

            <div className="article-tile">
              <a href={`/${locale}/docs/Tools/Ansible`} className="tile-tag">
                Ansible
              </a>
              <a
                href={`/${locale}/docs/Tools/Ansible/`}
                className="tile-title expand-this-link"
              >
                About Ansible
              </a>
              <p>
                Ansible is an open-source software provisioning, configuration
                management, and application-deployment tool enabling
                infrastructure as code. It runs on many Unix-like systems, and
                can configure both Unix-like systems as well as Microsoft
                Windows.
              </p>
            </div>

            <div className="article-tile">
              <a href={`/${locale}/docs/Learn/Linux`} className="tile-tag">
                Linux
              </a>
              <a
                href={`/${locale}/docs/Learn/Linux/Introduction_About_Computer_Network/`}
                className="tile-title expand-this-link"
              >
                Introduction About Computer Network
              </a>
              <p>
                "A Computer network or data network is a telecommunications
                network that allows computers to exchange data. In computer
                networks, networked computing devices pass data to each other
                along different data connections. Data is transferred in the
                form of packets by using encoding and decoding standards."
              </p>
              <p>
                Network computer devices that originate, route and terminate the
                data are called network nodes. Nodes can include hosts such as
                personal computers, phones, servers as well as networking
                hardware. Two such devices are said to be networked together
                when one device is able to exchange information with the other
                device, whether or not they have a direct connection to each
                other.
              </p>
              <p>
                Computer networks support applications such as access to the
                World Wide Web, shared use of application and storage
                servers,printers, and fax machines, and use of email and instant
                messaging applications. Computer networks differ in the physical
                media used to transmit their signals, the communications
                protocols to organize network traffic, the network's size,
                topology and organizational intent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
