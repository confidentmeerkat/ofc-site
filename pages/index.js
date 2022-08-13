import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        background: 'url("/background1.svg") no-repeat center center fixed',
        backgroundSize: "cover",
      }}
    >
      <header>
        <Image alt="ofc-image" src="/logo-black.png" className="h-8" />
      </header>
      <div
        className="flex justify-center"
      >
        <Image alt="ofc-image" src="/123.png" />
      </div>

      <div className="flex flex-col justify-center items-center space-y-24 p-8 text-red-900">
        <h1
          className="flex flex-row justify-items-center text-7xl mt-28 text-yellow-800"
          style={{ fontFamily: "ChelaOne", letterSpacing: "3px" }}
        >
          About OFC
        </h1>

        <div className="flex lg:w-1/2 w-full md:flex-row flex-col justify-center md:space-x-12 space-y-4 items-center">
          <div className="w-64 flex flex-1 flex-col justify-between">
            <Image alt="ofc-image" src="/background.png" width="100%" />
            <div className="mt-12">
              <h3 className="text-2xl mt-6">JOIN US ON </h3>
              <div className="flex flex-row justify-start space-x-8 mt-6">
                <a href="https://twitter.com/oddfriends_club" target="_blank" rel="noreferrer">
                  <Image alt="ofc-image" src="/twitter-48.png" className="h-16" />
                </a>
                <a href="https://discord.com/invite/2X9UGY3qPJ" target="_blank" rel="noreferrer">
                  <Image alt="ofc-image" src="/discord-new-48.png" className="h-16" />
                </a>
                <a
                  href="https://www.instagram.com/oddfriends.club/"
                  target="_blank" rel="noreferrer"
                >
                  <Image alt="ofc-image" src="/instagram-80.png" className="h-16" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="text-2xl flex-1 space-y-3"
            style={{ fontFamily: "JustForFun" }}
          >
            <p>
              11,111 Unique Odd Friends living on Ethereum Blockchain are here
              to make you rich. #MAXBID.
            </p>
            <p>NO FAKE ROADMAPS!</p>
            <p>As we are tired of seeing Fake and BS Roadmaps and rugs! </p>
            <p className="flex flex-row">
              <Image alt="ofc-image" src="/friends-48.png" className="h-6 mr-2" />
              We are on a mission to build the largest friends community on
              Ethereum Blockchain.
            </p>
            <p className="flex flex-row">
              <Image alt="ofc-image" src="/community96.png" className="h-6 mr-2" />
              This Project is Completely Community Driven!
            </p>
            <p className="flex flex-row">
              <Image alt="ofc-image" src="/run-into-men-48.png" className="h-6 mr-2" />
              Get Your Odd Friend and Make New Friends
            </p>
          </div>
        </div>

        <div className="flex lg:w-1/2 w-full md:flex-row flex-col-reverse md:space-y-0 justify-center space-y-reverse space-y-8 space-x-0 items-center">
          <div className="text-xl flex-1 flex-shrink-0">
            <ul style={{ listStyle: "inside" }} className="space-y-3">
              <li className="flex flex-row">
                <i>
                  <Image alt="ofc-image" src="/friends-48.png" className="h-6 mr-2"></Image>
                </i>
                Mint Price: Free + Gas
              </li>
              <li className="flex flex-row">
                <i>
                  <Image alt="ofc-image" src="/friends-48.png" className="h-6 mr-2"></Image>
                </i>
                Max 5 mint Per Wallet
              </li>
              <li className="flex flex-row">
                <i>
                  <Image alt="friends-svg" src="/friends-48.png" className="h-6 mr-2"></Image>
                </i>
                7.5% Royalties
              </li>
              <li className="flex flex-row">
                <i>
                  <Image alt="ofc-image" src="/friends-48.png" className="h-6 mr-2"></Image>
                </i>
                CC0
              </li>
              <li className="flex flex-row">
                <i>
                  <Image alt="ofc-image" src="/friends-48.png" className="h-6 mr-2"></Image>
                </i>
                Friends Driven
              </li>
            </ul>
          </div>
          {/* <div className="lg:w-32 w-full flex-1 justify-center items-center flex-shrink-0"> */}
          <Image alt="ofc-image" src="/ofc.gif" className="max-w-none w-72 m-0" />
          {/* </div> */}
        </div>

        <div className="flex flex-col items-center space-y-6">
          <h1
            className="flex flex-row justify-items-center text-7xl mt-28 text-yellow-800"
            style={{ fontFamily: "ChelaOne", letterSpacing: "3px" }}
          >
            FAQ'S
          </h1>
          <ul
            style={{ listStyle: "auto", color: "maroon" }}
            className="lg:w-1/2 w-full space-y-3 text-xl"
          >
            <li>
              <h4 className="text-xl font-semibold">
                What is Odd Friends Club [OFC]?
              </h4>
              <p>
                OFC is a collection of 11,111 unique Friends on the Ethereum
                Blockchain on a mission to create a secret and biggest Friends
                group in the NFT space. This is completely a community-driven
                project, and we don’t have any big roadmaps as we are tired of
                seeing a lot of rug pulls. As a Holder of Odd Friend you are
                never lonely!
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">
                What is the mint price?{" "}
              </h4>
              <p>Free + gas. 5 mint per wallet.</p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">What is CCO?</h4>
              <p>
                CC0. This means there is no copyright for the NFT collection.
                You can modify, distribute, and perform the work, even for
                commercial purposes, all without asking permission.
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">
                What is the utility/roadmap?
              </h4>
              <p>
                We got sick of seeing BS roadmaps presented in the hope to gain
                trust. Instead, we aim to under promise and overdeliver
              </p>
            </li>
            <li>
              <h4 className="text-xl font-semibold">Who is on the team?</h4>
              <p>
                We are a team of 3 from across the globe, with artists, and
                developers, all native to NFTs with project experience
              </p>
            </li>
          </ul>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4 flex justify-center items-center flex-col mt-12">
        <div className="flex flex-row justify-start space-x-8 mt-6">
          <a href="https://twitter.com/oddfriends_club" target="_blank" rel="noreferrer">
            <Image alt="ofc-image" src="/twitter-48.png" className="h-12" />
          </a>
          <a href="https://discord.com/invite/2X9UGY3qPJ" target="_blank" rel="noreferrer">
            <Image alt="ofc-image" src="/discord-new-48.png" className="h-12" />
          </a>
          <a href="https://www.instagram.com/oddfriends.club/" target="_blank" rel="noreferrer">
            <Image alt="ofc-image" src="/instagram-80.png" className="h-12" />
          </a>
        </div>

        <Image alt="ofc-image" src="/logo-white.png" className="w-96" />
      </footer>
    </div>
  );
}
