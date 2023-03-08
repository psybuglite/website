import React, { useEffect } from "react";
import Layout from "../../components/layout";
import hljs from "highlight.js";


const VirtualServer = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <main className="w-full">
        <section className="pt-32">
          <div className="border-b-2 relative border-[#323232] pb-24 gap-16 max-w-[780px] mx-auto">
            
            <div className="mb-8">
              <h2 className="text-[32px]">
                How to Set Up React Project on a Virtual Server
              </h2>
            </div>
            <article className="wrapper-y will-grow articletext article-content">
              <p className="py-4">
                So, you&#39;ve finished building up the UI for your React project
                and you want to host it up on a remote machine. In this article,
                we&#39;ll be using Google Cloud Platform to host our sample React
                website.
              </p>
              <h2 className="py-4 text-[20px] font-bold" id="step-1-ssh-into-your-virtual-private-server">
                Step 1: SSH into your virtual private server
              </h2>
              <p className="py-4">
                Build your React website using <code>npm build</code> and upload
                the code to your preferred git repository.
              </p>
              <h2 className="py-4 text-[20px] font-bold" id="step-2-ssh-into-your-virtual-private-server">
                Step 2: SSH into your virtual private server
              </h2>
              <p className="py-4">Log in to your virtual private server</p>
              <p className="py-4">
                For Unix-like devices (Mac OS or Linux)
                <code>
                  ssh &lt;username&gt;@&lt;computer name or IP address&gt;
                </code>
              </p>
              <p className="py-4">For example</p>
              <pre>
                <code class="lang-bash">
                  <span class="hljs-attribute">ssh</span> Tonye
                  <span class="hljs-variable">@computer</span>
                </code>
              </pre>
              <p className="py-4">or</p>
              <pre>
                <code class="lang-bash">
                  <span class="hljs-selector-tag">ssh</span>{" "}
                  <span class="hljs-selector-tag">Tonye</span>@
                  <span class="hljs-keyword">127</span>.
                  <span class="hljs-keyword">0</span>.
                  <span class="hljs-keyword">0</span>.
                  <span class="hljs-keyword">1</span>
                </code>
              </pre>
              <h2 className="py-4 text-[20px] font-bold" id="step-3-install-apache">Step 3: Install Apache</h2>
              <pre>
                <code class="lang-bash">
                  sudo apt-<span class="hljs-built_in">get</span>{" "}
                  <span class="hljs-keyword">update</span> &amp;&amp; sudo apt-
                  <span class="hljs-built_in">get</span> install apache2 -y
                </code>
              </pre>
              <p className="py-4">
                At this point, if you go to your IP address, you should be able to
                see Apache2 Debian Default Page.
              </p>
              <h2 className="py-4 text-[20px] font-bold" id="step-4-install-git-and-clone-your-react-project">
                Step 4: Install git and clone your React Project
              </h2>
              <p className="py-4">
                Before cloning the React project, you&#39;ll need to have git
                installed
              </p>
              <pre>
                <code class="lang-bash">
                  sudo apt-<span class="hljs-keyword">get</span> install git
                </code>
              </pre>
              <p className="py-4">You can then clone your repo into your virtual machine.</p>
              <pre>
                <code class="lang-bash">
                  sudo git <span class="hljs-keyword">clone</span>{" "}
                  <span class="hljs-title">&lt;git</span> repository&gt;
                </code>
              </pre>
              <h2 className="py-4 text-[20px] font-bold" id="step-5-copy-the-react-build-into-the-web-server-directory">
                Step 5: Copy the React build into the web server directory
              </h2>
              <p className="py-4">
                Copy all the content of the build folder into the web server
                directory.
              </p>
              <pre>
                <code class="lang-bash">
                  sudo cp -r ./
                  <span class="hljs-params">&lt;react repository folder&gt;</span>
                  <span class="hljs-meta-keyword">/build/</span>*{" "}
                  <span class="hljs-meta-keyword">/var/</span>www
                  <span class="hljs-meta-keyword">/html/</span>
                </code>
              </pre>
              <p className="py-4">
                For sanity check, you can confirm the content of your web server
                directory to be sure you copied all the contents of your build
                folder
              </p>
              <pre>
                <code class="lang-bash">
                  ls <span class="hljs-regexp">/var/</span>www
                  <span class="hljs-regexp">/html/</span>
                </code>
              </pre>
              <p className="py-4">
                With that done, you can check your IP to see your React project
                live.
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default VirtualServer;
