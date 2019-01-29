import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import PanelWrapper from '../components/Panel/PanelWrapper';
import VerticalMenu from '../components/VerticalMenu';
import LayoutBase from '../components/Layout/LayoutBase';

const Faq = () => (
  <LayoutBase>
    <div className="content">
      <div className="content__inner content__inner_medium">
        <div className="content__title content__title_between">
          <h1 className="title">FAQ</h1>
        </div>
      </div>

      <div className="content">
        <div className="content__inner">
          <div className="grid grid_settings">
            <div className="grid__item grid__item_side">
              <VerticalMenu
                sections={[
                  { name: 'U°Community', title: 'U°Community' },
                  { name: 'U°OS', title: 'U°OS' },
                  { name: 'Glossary', title: 'Glossary' },
                ]}
                sticky
              />
            </div>

            <div className="grid__item grid__item_main">
              <div className="fields">
                <Element name="U°Community" className="fields__block">
                  <div className="fields__title">
                    <h1 className="title title_small">U°Community</h1>
                  </div>

                  <div className="content__section content__section_small">
                    <PanelWrapper
                      title="What is U.community?"
                    >
                      <div className="text_faq">
                        <p>U°Community is a dapp on the U°OS blockchain. U°Community allows you to create content, interact with people, use dapps, run your business, govern Decentralized Autonomous Organizations (DAO) and Decentralized Autonomous Communities (DAC) and many other things.
                          Your contributions to the network through U°Community are decentrally weighed by the community. The resulting weight of your contributions is your influence score called Importance. Your Importance is your digital asset.
                        </p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="How can people interact on the platform?"
                    >
                      <div className="text_faq">
                        <p>People on the U°Community platform can interact with each other using:</p>
                        <ul>
                          <li>Follow – Subscribe to the content generated by the user that is followed with content.</li>
                          <li>Join — Join [Decentralized Autonomous Communities](LINKtoGlossaryDAC)</li>
                          <li>Trust — A social transaction with which you extend your web of trust to other accounts: people and [Decentralized Autonomous Organizations](LINKtoGlossaryDAO)</li>
                          <li>Repost – Create a post in your personal feed with a short preview and a link to the reposted content, much like a Twitter or Facebook repost</li>
                          <li>Upvote — A social transaction with which you give value to posts with your Importance</li>
                          <li>Downvote — The opposite of Upvote</li>
                        </ul>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="What can I do as an unregistered user?"
                    >
                      <div className="text_faq">
                        <p>You can see all the content produced by other users on the entirety of U°Community.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="What can I do as a registered user?
                      "
                    >
                      <div className="text_faq">
                        <p>You can see all the content produced by other users and interact with other users and content.</p>
                        <p>You can create your own content.</p>
                        <p>Other users will be able to interact with your profile and with your content.</p>
                        <p>You can shape your own interests by following the people and communities you like.</p>
                        <p>You can interact with all the content on the platform: like, comment and share posts, sell and purchase goods and services via offers, run and join [Decentralized Autonomous Communities](LINKtoGlossaryDAC) and [Decentralized Autonomous Organizations](LINKtoGlossaryDAO).</p>
                        <p>You can transfer funds to other registered users. </p>
                        <p>You can (and should) vote for Block Producers and Calculator Nodes on the  <Link className="auth__link" target="_blank" to="/governance"> governance page. </Link></p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="How do I register? What information do you need?"
                    >
                      <div className="text_faq">
                        <p>You can register by clicking Sign in —&gt; Create one in the header.</p>
                        <p>You need to generate a [unique account name](LINKtoGlossaryAccount) and save the [Brainkey](LINKtoGlossaryBrainkey) in any convenient way. If you lose your Brainkey, your account will be lost. Please take your time to properly save and secure the Brainkey.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Can I change or recover my password?"
                    >
                      <div className="text_faq">
                        <p>No. U°Community is a dapp on blockchain. Your account is an account on blockchain that you can only access with your [brainkey](LINKtoGlossaryBrainkey).</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="What entities can I create?"
                    >
                      <div className="text_faq">
                        <p>When you register on the platform, your personal user profile will be created. After that you can create:</p>
                        <ul>
                          <li>
                          Community profile – you can invite other users of the platform to the Community Board. See also [DAC](LINKtoGlossaryDAC).
                          </li>
                          <li>
                          Organization profile — you can invite other users of the platform to the Community Board. See also [DAC](LINKtoGlossaryDAC).
                          </li>
                        </ul>
                        <p>All the profiles (user, community, organization) have their own separate profile feed  that they can use to distribute content to the users following them.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="What can I post in my feed?"
                    >
                      <div className="text_faq">
                        <p>You can do short posts (like Twitter or Facebook short posts), you can create publications (longer posts like Medium) or you can create offers.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Can I use Tags?
                      "
                    >
                      <div className="text_faq">
                        <p>You can add #tags to your posts to gain visibility. Tags get their own [Importance](LINKtoGlossaryImportance) based on how the tagged posts perform with the community.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Can I mention other users?"
                    >
                      <div className="text_faq">
                        <p>Mention other registered users with @. For example, @accountName. The user that you mention will receive a notification.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="What are these degree signs above posts or profiles?"
                    >
                      <div className="text_faq">
                        <p>[Importance](LINKtoGlossaryImportance).</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="How is U°Community different from Steemit?"
                    >
                      <div className="text_faq">
                        <p>Steemit is built around content, its rating and direct monetization.</p>
                        <p>U°Community is intrinsically different.</p>
                        <p>U°Community is a dapp on the U°OS blockchain that’s built to realize the three core concepts:</p>
                        <ul>
                          <li>[Digital individual](LINKtoGlossaryDigitalIndividual)</li>
                          <li>[Asset](LINKtoGlossaryAsset)</li>
                          <li>[Network economy](LINKtoGlossaryNetworkEconomy)</li>
                        </ul>
                        <p>The content that you share on U°Community is a part of your interaction with the network, it’s not the sole objective of the dapp. Your social transactions are registered on the blockchain, your content is evaluated by the network members, and as a result you are decentrally assigned [Importance](LINKtoGlossaryImportance). Importance is your asset that you — a [digital individual](LINKtoGlossaryDigitalIndividual) — use in the network economy, which is basically a peer-to-peer economy. You can scale your Importance effortlessly by using it as a decentrally established reputation — e.g. by using it as a trusted LinkedIn profile, you can run your business as a [DAO](LINKtoGlossaryDAO), you can influence the network with your Importance, you can put out a dapp for people to use and it will run off your Importance alone, without spending money on ads and so on — the opportunities are endless.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="How is U°Community different from Reddit?"
                    >
                      <div className="text_faq">
                        <p>Lots of great communities live on Reddit and the Karma you get for contributing to the communities there is what’s called “Imaginary Internet Points”.</p>
                        <p>U°Community uses the U°OS network’s [DPOI](LINKtoGlossaryDPOI), which means your “karma” here — called Importance — really matters. Through [Importance](LINKtoGlossaryImportance) you have influence on anything on the network — from being a part of decision making processes through decentral governance to becoming a part of the active economy by having the network’s native currency — UOS — issued to you based on your [Importance](LINKtoGlossaryImportance).</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Can I fake my activity on U°Community to increase my Importance?"
                    >
                      <div className="text_faq">
                        <p>The algorithm of U°Community and U°OS is completely transparent with zero obfuscation and designed to run a network where real human contribution is valued the most. For details, check the Yellow Paper on U°OS Network GitHub.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Is this totally like that Black Mirror episode?"
                    >
                      <div className="text_faq">
                        <p>No. This is not the total surveillance system that people fear, it’s the opposite.</p>
                        <p>In a total surveillance system where you get assigned a social score, you don’t choose how to manifest yourself in a community. On U°Community, you do. It’s you operating as a sovereign [digital individual](LINKtoGlossaryDigitalIndividual), not as a tracked, monitored, and surveilled unit.</p>
                        <p>A surveillance system is a centralized entity that centrally decides what score to assign to you. Both U°Community and U°OS are decentralized and belong to the network.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Who is building U°Community?"
                    >
                      <div className="text_faq">
                        <p>Check the <Link className="auth__link" target="_blank" to="/communities/4"> board of U°OS Network. </Link>  We are a team that believes in the sovereignty of the [digital individual](LINKtoGlossaryDigitalIndividual) and in the [network economy](LINKtoGlossaryNetworkEconomy).</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Where can I check the code of U°Community?"
                    >
                      <div className="text_faq">
                        <p>Check  <Link className="auth__link" target="_blank" to="https://github.com/UOSnetwork/">U°OS Network on GitHub.</Link>  </p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Can I contribute to the code of U°Community?"
                    >
                      <div className="text_faq">
                        <p>Please do! U°Community is open source and the development community is growing.</p>
                        <p>Start with <Link className="auth__link" target="_blank" to="https://github.com/UOSnetwork/uos.docs/blob/master/CONTRIBUTING.md">CONTRIBUTING.md of U°OS Network on GitHub.</Link>  We keep it up to date.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Is U°Community on a testnet right now?"
                    >
                      <div className="text_faq">
                        <p>Yes.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="When will U°Community migrate to mainnent?"
                    >
                      <div className="text_faq">
                        <p>There’s no specific date. Your best bet is around mid 2019.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Why should I become a part of the U°Community testnet?"
                    >
                      <div className="text_faq">
                        <p>A pool of the mainnet UOS tokens will be distributed to the testnet accounts in accordance with each account’s [Importance](LINKtoGlossaryImportance). Apart from being a testnet participation incentive, this is a good way to kickstart the mainnet.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Are there any airdrops of UOS planned?"
                    >
                      <div className="text_faq">
                        <p>To jumpstart the network, there will be airdrops to holders of tokens and coins of other networks. The details will be announced later.</p>
                      </div>
                    </PanelWrapper>
                    <PanelWrapper
                      title="Will UOS be tradable on exchanges?"
                    >
                      <div className="text_faq">
                        <p>Exchange listings are being negotiated, but only for the mainnet tokens. The testnet tokens are just this — testnet tokens.</p>
                      </div>
                    </PanelWrapper>

                  </div>
                </Element>
                <Element name="U°OS" className="fields__block">
                  <div className="fields__title">
                    <h1 className="title title_small">U°OS</h1>
                  </div>
                  <PanelWrapper
                    title="What is U°OS?"
                  >
                    <div className="text_faq">
                      <p>U°OS is a [DPOI](LINKtoGlossaryDPOI) based distributed protocol framework. U°OS is based on the EOSIO open-source code.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="How is U°OS different from other blockchains?"
                  >
                    <div className="text_faq">
                      <p>U°OS is based on the new DPOI (Delegated Proof of Importance) consensus algorithm. Importance is your influence score in the network and it’s decentrally assigned based on how the community values your contributions. U°OS issues the native core token called UOS based on your Importance.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="How is U°OS different from EOSIO?"
                  >
                    <div className="text_faq">
                      <p>The main difference is the consensus algorithm – DPOI (Delegated Proof of Importance).</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="What features does U°OS have?"
                  >
                    <div className="text_faq">
                      <ul>
                        <li>Smart-contracts execution</li>
                        <li>Currencies and tokens support</li>
                        <li>Web assembly support</li>
                        <li>Account system</li>
                        <li>Free for applications’ users</li>
                        <li>Dynamic emission algorithm</li>
                        <li>Social transactions</li>
                        <li>Asset Transfer</li>
                        <li>Social Importance</li>
                        <li>DAC and DAO support</li>
                      </ul>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Can U°OS be used by other applications?"
                  >
                    <div className="text_faq">
                      <p>Yes, it can be used by other applications – U°Community is just one of the use-cases for the U°OS network.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="How are social interactions reflected on the blockchain?"
                  >
                    <div className="text_faq">
                      <p>Every social interaction that users perform using the U°Community dapp is registered in the U°OS blockchain as a transaction. So every action is immutably recorded.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Can the Importance algorithm be used by other applications on the U°OS blockchain?"
                  >
                    <div className="text_faq">
                      <p>Yes, the library is open-source and can be used by any developers that want to launch their own dapps.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Who is building U°OS?"
                  >
                    <div className="text_faq">
                      <p>Check the
                        <Link className="auth__link" target="_blank" to="/communities/4"> board of U°OS Network</Link>
                         and the <Link className="auth__link" target="_blank" to="https://github.com/orgs/UOSnetwork/people">  U°OS Network GitHub.</Link> We are a group of people that believe in the sovereignty of the [digital individual](LINKtoGlossaryDigitalIndividual) and in the [network economy](LINKtoGlossaryNetworkEconomy).
                      </p>
                      <p>You are more than welcome to join us.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Where can I check the code of U°OS?"
                  >
                    <div className="text_faq">
                      <p>Check <Link className="auth__link" target="_blank" to="https://github.com/UOSnetwork/"> U°OS Network on GitHub.</Link></p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Can I contribute to the code of U°OS?"
                  >
                    <div className="text_faq">
                      <p>Please do! U°Community is open source and the development community is growing.</p>
                      <p>Start with <Link className="auth__link" target="_blank" to="https://github.com/UOSnetwork/uos.docs/blob/master/CONTRIBUTING.md">CONTRIBUTING.md of U°OS Network on GitHub.</Link>  We keep it up to date.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Technical details of DPOI?"
                  >
                    <div className="text_faq">
                      <p>Check the <Link className="auth__link" target="_blank" to="https://github.com/UOSnetwork/uos.docs/tree/master/yellow_paper">  DPOI Yellow Paper on U°OS Network GitHub.</Link></p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Is U°OS on a testnet right now?"
                  >
                    <div className="text_faq">
                      <p>Yes.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="When will U°OS migrate to mainnent?"
                  >
                    <div className="text_faq">
                      <p>There’s no specific date. Your best bet is around mid 2019</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Are there any airdrops of UOS planned?"
                  >
                    <div className="text_faq">
                      <p>To jumpstart the network, there will be airdrops to holders of tokens and coins of other networks. The details will be announced later.</p>
                    </div>
                  </PanelWrapper>
                </Element>

                <Element name="Glossary" className="fields__block">
                  <div className="fields__title">
                    <h1 className="title title_small">Glossary</h1>
                  </div>
                  <PanelWrapper
                    title="Account"
                  >
                    <div className="text_faq">
                      <p>An account is your collection of authorizations registered on the U°OS blockchain.</p>
                      <p>Your account has a human-readable name, a brainkey, public-private key pairs, and owner and active permissions.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Account creation"
                  >
                    <div className="text_faq">
                      <p>To create an account:</p>
                      <ol>
                        <li>Click SIGN IN —&gt; Create one</li>
                        <li>Type in your preferred account name.</li>
                        <li>Click PROCEED.</li>
                        <li>Copy your brainkey and store it in a secure place.</li>
                        <li>Verify your brainkey by crossing out the words 2, 4, 8 and 12 of your brainkey in the randomized key order.</li>
                        <li>If you accept the terms and conditions, put a tick in the box.</li>
                        <li>Click FINISH.</li>
                      </ol>
                      <p>The U°OS blockchain will register the account name.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Account name"
                  >
                    <div className="text_faq">
                      <p>An account name is a name that you pick and register on the U°OS blockchain.</p>
                      <p>The account name is linked to your brainkey and the public-private key pairs.</p>
                      <p>The account name has the following conventions:</p>
                      <ul>
                        <li>Must be 12 characters</li>
                        <li>Can only contain the characters abcdefghijklmnopqrstuvwxyz12345, a-z (lowercase), 1-5</li>
                      </ul>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Active permission"
                  >
                    <div className="text_faq">
                      <p>The active permission has an associated key that you use to sign your fund transfer transactions.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Asset"
                  >
                    <div className="text_faq">
                      <p>An asset is what the digital individual possesses. An asset is a value you bring to the network by operating as a digital individual; it&#39;s what you contribute to the network and the many communities on the network. On Reddit, it&#39;s your karma points; on Facebook, it&#39;s the likes that your posts get and followers, on Steemit, it&#39;s your followers and your Steem Dollars and your Steem Power, and so on. So the asset is what you have as a result of your social transactions — e.g., do a post in a network, be evaluated by the community (e.g., through upvotes/downvotes) that have any interest in the knowledge you are sharing, receive incoming social transactions through upvotes and comments/replies. This is your social asset.</p>
                      <p>But an asset is also what you need to have in the form of currency to operate as a business and as a customer. For example, when you need to buy/sell something (including physical goods) on the network, you use currency. It&#39;s an economic transaction. The native U°OS and U°Community token is called UOS. You use UOS for economic transactions — to run a dapp or do any sort of business. You also receive UOS for your social transactions.</p>
                      <p>See also [Importance](LINKtoGlossaryAccount).</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Block Producer"
                  >
                    <div className="text_faq">
                      <p>A block producer is a role on the U°OS blockchain that produces blocks. Every transaction on the U°OS blockchain is registered in a block by a block producer. A block producer is voted into the role by the community.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Brainkey"
                  >
                    <div className="text_faq">
                      <p>A brainkey is the seed phrase used to generate public-private key pairs. The brainkey is linked to your account name.</p>
                      <p>Use the brainkey to access your account and register transactions on the U°OS blockchain.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Calculator Node"
                  >
                    <div className="text_faq">
                      <p>A Calculator Node is a node on the U°OS blockchain dedicated to calculating the activity of your account: social, transactional, stake.</p>
                      <p>Calculator Nodes are community-owned and receive a regular emission of UOS tokens.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Community"
                  >
                    <div className="text_faq">
                      <p>A community is a Decentralized Autonomous Community (DAC) that you can create or join.</p>
                      <p>Create or become a part of a community to work with other members to increase or diversify your influence.</p>
                      <p>You can add your publications on your behalf or on behalf of a community that you joined. Adding a publication on behalf of a community increases your audience reach.</p>
                      <p>Governance is a key feature to running your community decentrally.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Delay on social/transactional activity"
                  >
                    <div className="text_faq">
                      <p>There might be a delay on your social activity, including upvoting, because your actions are registered on the U°OS blockchain.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Delegated Proof of Importance"
                  >
                    <div className="text_faq">
                      <p>DPOI is the consensus algorithm of U°OS. For anything on the network, including the network changes, you vote with your [Importance](LINKtoGlossaryAccount). DPOI is what keeps the network live.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Digital individual"
                  >
                    <div className="text_faq">
                      <p>The digital individual is your digital representation in the network — basically the Internet. Your digital selfhood.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Importance"
                  >
                    <div className="text_faq">
                      <p>Importance both a reputation and an asset on the network.</p>
                      <p>You get assigned an Importance based on the following factors:</p>
                      <ul>
                        <li>UOS Stake — The amount of UOS you stake for network resource</li>
                        <li>Social transactions — Upvotes, Downvotes, Comments, Replies you receive as a result of you operating in the network.</li>
                        <li>Economic transactions — Transfer of funds in the form of UOS to you.</li>
                      </ul>
                      <p>For details, check the <Link className="auth__link" target="_blank" to="https://github.com/UOSnetwork/uos.docs/tree/master/yellow_paper">   Yellow Paper on U°OS Network GitHub.</Link></p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Importance decay"
                  >
                    <div className="text_faq">
                      <p>Your importance fades over time based on your social and transactional activity parameter. If your account stays socially or transactionally inert for a period of time, your importance decays.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Mentions"
                  >
                    <div className="text_faq">
                      <p>Mention other users with @AccountName. The users that you mention will receive a notification.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Network economy"
                  >
                    <div className="text_faq">
                      <p>A network economy — a term that in 2019 still has no clear definition — is pretty much the way anyone with access to a connected device operates today. Kevin Kelly formulated the 12 principles of the network economy — and these are the principles that U°OS is based on — in 1997 in a Wired article and expanded on them in a book in 1998. In 2018 Kevin Kelly also said that it&#39;d been 20 years and he wouldn&#39;t change much in the principles he had formulated. They stood the test of time. Check out the original article at https://www.wired.com/1997/09/newrules/ and there&#39;s also a good summary at http://www.valuebasedmanagement.net/methods_kelly_twelve_principles_network_economy.html</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Organization"
                  >
                    <div className="text_faq">
                      <p>An organization is a Decentralized Autonomous Organization (DAO) that you can create or join through an invitation.</p>
                      <p>DAOs are the best way to run your business in a decentralized and transparent way.</p>
                      <p>Governance is a key feature to running your organization decentrally.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Owner permission"
                  >
                    <div className="text_faq">
                      <p>The owner permission has an associated key that you use to change the active permission. The owner key represents the ownership of your account.</p>
                      <p>This is your owner key to change the active permission.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Profile"
                  >
                    <div className="text_faq">
                      <p>A profile is your publicly visible information.</p>
                      <p>Filling out the profile is an excellent way to let the community learn about you and engage.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Social activity"
                  >
                    <div className="text_faq">
                      <p>Your social activity represents your social interactions on the U°OS blockchain: your publications, comments, upvotes, evaluation of your actions by the community, including your actions and posts as part of your registered communities.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Tags"
                  >
                    <div className="text_faq">
                      <p>You can add #tags to your posts to gain visibility. Tags get their own Importance based on how the tagged posts perform with the community.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Transactional activity"
                  >
                    <div className="text_faq">
                      <p>Your transactional activity represents transfer of funds to your account from various accounts on the U°OS blockchain.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="Trust"
                  >
                    <div className="text_faq">
                      <p>Trust is a social transaction on the network from one account to another. When you click “Trust” on an organization or an individual, you extend your web of trust to them.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="UOS token"
                  >
                    <div className="text_faq">
                      <p>UOS is the native token of U°OS network. You can use it currency and for staking to buy and rent network resources</p>
                      <p>On the network, you get UOS by:</p>
                      <ul>
                        <li>Running a [Block Production Node](LINKtoGlossaryBlockProducer)</li>
                        <li>Running a [Calculator Node](LINKtoGlossaryCalculatorNode)</li>
                        <li>For your [Importance](LINKtoGlossaryImportance)</li>
                        <li>Account to account transfer — for example by running a [DAO](LINKtoGlossaryDAO)</li>
                        <li>Dapp monetization</li>
                      </ul>
                      <p>Outside of the network, you can get UOS by purchasing it on an exchange when it’s listed.</p>
                    </div>
                  </PanelWrapper>
                  <PanelWrapper
                    title="UOS token emission"
                  >
                    <div className="text_faq">
                      <p>The emission is a regular emission of UOS tokens to the accounts registered on the U°OS blockchain.</p>
                      <p>The emission has two broad types:</p>
                      <ul>
                        <li>Regular emission to Block Producers and Calculator Nodes</li>
                        <li>Dynamic emission to user accounts based on their Importance</li>
                      </ul>
                    </div>
                  </PanelWrapper>

                </Element>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutBase>
);

export default Faq;
