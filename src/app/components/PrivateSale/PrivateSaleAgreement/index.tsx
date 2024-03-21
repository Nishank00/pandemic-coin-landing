'use client';
import React, { useState } from 'react'
import InputField from '../../common/InputField'
import { useForm } from 'react-hook-form';
import Button from '../../common/Button';
import { useCommonStore } from '../../../../store/commonStore';

const PrivateSaleAgreement = () => {
    const [loading, setLoading] = useState(false)
    const {accessToken, setUser, user}:any = useCommonStore();
    const {
        register,
        formState: {errors},
        watch,
        handleSubmit
    } = useForm();

    const onSubmit = async (inpData:any) => {
        if(inpData?.agree){
            setLoading(true)
            const data = await fetch('/api/agree-to-terms', {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            })

            const res = await data.json();
            setLoading(false);
            if(res.status){
                setUser({...user, ['agreedTerms']: true})
            }

        }
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-[800px] mx-auto my-[10px] rounded backdrop-blur-[42px] bg-[#ffffff0a] p-[20px] flex flex-col gap-[15px]'>
        <h2 className='text-[20px] md:text-[30px]'>Token Sale Agreement</h2>
        <div className="agreement-scrollbar h-[500px] overflow-y-auto ">
            <h3>Terms of Token Sale</h3>
            <h4>Brief Summary</h4>
            <p>By accepting these Terms, you acknowledge and confirm your agreement with the following:</p>
            <ul>
                <li>You have read, understood and accepted the Terms of Token Sale and that you had the possibility to obtain advice related to the Terms of Token Sale from an attorney, legal advisor or any other relevant professional</li>
                <li>Your participation in the Token Sale and the Project are subject to the successful completion of identity verification and we will require you to provide the copy of your identification document and your selfie picture with such document or instead of selfie we may ask you to complete liveness face recognition;</li>
                <li>The purchase of Tokens is final, the payment for Tokens is non-refundable;</li>
                <li>Tokens purchased at Private Sale and Presale rounds of the Token Sale are subject to a twelve (12) month lock-up period commencing from the date of the Token Generation Event and, at the end of such lock-up period, shall then be unlocked linearly over a twenty (20) month period over the course of 20 equal monthly instalments;</li>
                <li>The release of Tokens to you will be made through the Claiming Functionality. It is your sole responsibility to claim unlocked Tokens through the Claiming Functionality;</li>
                <li>You shall not purchase Tokens for the purpose of speculative investment, regular investment or wealth management;</li>
                <li>Purchasing and holding Tokens, participating in the Project involve significant risks and potential for financial losses as described in the Section 9 of the Terms of Token Sale. We will have no responsibility or liability for such risks;</li>
                <li>Terms of Token Sale may be terminated if you become a citizen, a permanent resident, relocated to any of the Restricted Regions, or day-to-day management of the company you are acting on behalf of is transferred to any of the Restricted Regions.</li>
            </ul>

            <ol>
                <li>
                    <h4>Acceptance of these Terms</h4>
                    <ol>
                        <li>This is a contract between you and [COMPANY NAME], a company incorporated in the Seychelles, having the notices address of [COMPANY ADDRESS]. References in these Terms to “Pandemic Coin Project”, “we”, “our” or “us”, are to [COMPANY NAME] and references to “you”, “your”, “user” or “purchaser” is to the person with whom Pandemic Coin Project enters into these Terms. </li>
                        <li>These Terms apply to the purchase of Tokens (as defined below), regulate purchasing, holding, using and owning of Tokens and using the Website. Upon accessing the Token Sale (as defined below), purchasing or acquiring Tokens, connecting a Connected Wallet (as defined below) to, accessing or using the Website, you agree to be legally bound by and to comply with these Terms, our Privacy Policy and all additional terms, policies and agreements incorporated herein by reference and amended from time to time at our sole discretion.</li>
                        <li>By accepting these Terms, you represent and warrant that you have read, understood and accept these Terms and that you also have had the possibility to obtain advice related to these Terms from an attorney, legal advisor or any other relevant professional. In addition, we may require you to confirm your acceptance of certain disclosures and disclaimers though putting ticks to the relevant fields of a disclosure notice screen.  </li>
                    </ol>
                </li>
                <li>
                    <h4>Definitions</h4>
                    <ol>
                        <li>Affiliate means, with respect to any Person, any individual, partnership, corporation, trust or other entity that directly or indirectly controls, or is controlled by, or is under common control with, such Person, where control means the direct or indirect ownership of more than ten percent (10%) of the outstanding shares or controlling shares, or other ownership interests having ordinary voting power to elect directors or the equivalent. For the avoidance of doubt, (i) Affiliate of any Person that is an investment fund or account (or a subsidiary of any such investment fund or account) shall include each other investment fund or account (or a subsidiary of any such other investment fund or account) managed by the same fund manager or advisor, and (ii) Affiliate of any Person that is an individual shall include the spouse, offspring, parents, and siblings of such individual. </li>
                        <li>Connected Wallet means a blockchain wallet (and an associated blockchain wallet address) on the technically supported blockchain network that is used for the purpose of authorisation at the Website, making payment for Tokens and receipt of the purchased Tokens. The authorisation of the Connected Wallet at the Website would be made available through technically supported third-party decentralised gateways (for example, MetaMask gateway) specifically listed at the Website, it is your obligation to determine and ensure that your Connected Wallet and the corresponding blockchain network are compatible (or are technically supported) by such decentralised gateways and our Website.</li>
                        <li>Information Materials means our promotional documents covering in detail Tokens, our projects, products, portfolios, services, ecosystems or decentralised networks, as applicable, as well as other issues related thereto and associated therewith, including but not limited to, our whitepapers, litepapers or pitch decks.</li>
                        <li>Person means any individual or an entity duly registered or undergoing registration under applicable laws including firm, partnership, association, corporation, company, trust, public body or government, or other entity of any kind or nature. </li>
                        <li>Project means the project of private community shelters program, related software applications, technical ecosystems and networks, including decentralised networks and the Token as the core technical asset of such project. </li>
                        <li>Restricted Regions shall include (i) the Democratic Republic of Congo, Cuba, the Crimea region, the Democratic People’s Republic of Korea, the Islamic Republic of Iran, Puerto Rico, Somalia, the Syrian Arab Republic, the United States of America (including its states and the District of Columbia), the Virgin Islands of the United States, or any other possessions of the United States of America; (ii) any state, country, territory or other jurisdiction that is embargoed by the United Nations; (iii) any state, country, territory or other jurisdiction where its purchase, ownership and/or use of Tokens would be illegal or otherwise violate any applicable law; and (iv) any state, country, territory or other jurisdiction imposing high risk of anti-money laundering or counter-terrorist financing as designated in Corruption Perceptions Index by Transparency International, FATF warnings or by the Seychelles authorities.</li>
                        <li>Token means a cryptographic token named Pandemic Coin (PDC).</li>
                        <li>Token Generation Event means, as determined by us at our sole and absolute discretion, the date upon which Tokens are generated and made available for general distribution.</li>
                        <li>Token Sale means a single event or a group of related events when we make Tokens available for purchase, including event(s) available by invites to a limited number of purchasers and/or event(s) available to the general public.</li>
                        <li>Website means a website accessible at the address www.pandemiccoin.io.</li>
                    </ol>
                </li>
                <li>
                    <h4>Eligibility</h4>
                    <ol>
                        <li>Purchase of Tokens is available and is intended solely for persons who are 18 or older and who satisfy the criteria described in these Terms. You represent and warrant that you are of legal age to form a binding contract (at least 18 years old under the Seychelles law) and have full power and authority to agree to these Terms.</li>
                        <li>You are not allowed to purchase, whether directly or not, Tokens through any means and/or take part in the Token Sale if: (i) you are the individual that is a citizen, a permanent resident or located in any of the Restricted Regions, (ii) you act on behalf of the entity established at, having its seat of incorporation at or carrying day-to-day management from any of the Restricted Regions, or (iii) you act on behalf of the entity that is controlled by or under common control with any such named entity or individual. </li>
                        <li>You hereby represent and warrant that you are not a person specified in the Section 3(b). We may take technical and/or organisational measures to prevent you from participating in the Token Sale from the Restricted Regions. You agree to comply with these requirements, even if our methods to prevent you from participating in the Token Sale are not effective or can be bypassed. We reserve the right to use any commercially and legally permitted means of determining whether you are in compliance with or in violation of any applicable geographic restrictions.</li>
                        <li>You hereby acknowledge and agree that we shall have the right at any stage of the process and/or at any moment to cease any transfer, release, unlock or distribution of Tokens to you and terminate your participation in the Tokens Sale or further transfer, release, unlock or distribution of Tokens without the obligation of any refunds to you in the following cases:
                        <ol>
                            <li>you are or become a citizen, a permanent resident, relocated to any of the Restricted Regions, or day-to-day management of the entity you act on behalf of is transferred to any of the Restricted Regions or the entity you act on behalf of is controlled by or under common control with such named entity or individual being a citizen of, located in or governed from any of the Restricted Region</li>
                            <li>voluntary termination of operations, a general assignment for the benefit of the creditors or any other liquidation, dissolution or winding up of the entity you act on behalf of;</li>
                            <li>you breached your representations and warranties set out in these Terms, including, but not limited to, conducting market manipulation or manipulating the price of Tokens;</li>
                            <li>you are or were placed on any list of suspicious persons banned from travelling or conducting business or financial transactions in any jurisdiction;</li>
                            <li>you are or become a politically exposed person (“PEP”) or a person connected with the PEP;</li>
                            <li>you made a payment from cryptocurrency wallets or blockchain wallets placed on common blacklists or being reasonably marked as used in illegal activities;</li>
                            <li>we have the reasonable suspicion that you are engaged in illegal activity or you using funds that come from illicit sources;</li>
                            <li>you failed to meet identity verification obligations as set out in the Section 4, misrepresented yourself or provided to us or our subcontractors forged, fraudulent, retouched, adjusted or non-authentic documents.</li>
                        </ol>
                        </li>
                        <li>You hereby acknowledge and agree that we may refuse you to participate in the Token Sale at our sole discretion, without explaining the reasons for such refusal.</li>
                    </ol>
                </li>

                <li>
                    <h4>Identity Verification</h4>
                    <ol>
                        <li>We require you to pass identity verification prior we allow you to participate in the Token Sale. We conduct identity verification for the purposes of, but not limited to, meeting our anti-money laundering regime and related policies (AML), preventing participation in the Token Sale of any ineligible persons, underaged persons, preventing participation in the Token Sale of individuals or businesses from the Restricted Regions as well as ongoing verification of customer’s eligibility to participate in the Project or any of its components and further maintain the list of customers admitted for participation in the Project. </li>
                        <li>You acknowledge and agree that we may use subcontractors for the purpose of your identity verification. In this case processing of requested information and documents would be governed by this subcontractor’s privacy policy and you would be able to read such privacy policy before you submit any information.</li>
                        <li>We or our subcontractors may require you to provide us with the following information: first name, last name, address, telephone number, e-mail address, date of birth, a government identification. Also, we or our subcontractors may request from you your driving license or any other national ID, internal or international passport, bank statement, utility bill, tax document and/or other documents that we or our subcontractors consider necessary for your identification. We or our subcontractors may request from you video identification or your selfie with a specified ID or passport or liveness automatic face recognition. </li>
                        <li>When you act on behalf of an entity, in addition, we or our subcontractors may require such entity to pass entity verification prior we allow such entity to participate in the Token Sale and receive any distribution of purchased Tokens and at any moment thereafter till the moment purchased Tokens are distributed to such entity in full. In this case, we or our subcontractors may require you to provide us with the following information: business name of the entity, registry code or registration number and the date of registration; ID of the shareholders (same as for the identification of individuals), the ID of the director(s) and/or members of the management board (same as for the identification of individuals), ID’s of the representatives (same as for the identification of individuals), proof of the registered office/seat of the entity, ID’s of the beneficial owners (same as for the identification of individuals), certificate of good standing, bank statements, proof of representation and powers, articles of association and/or other information and documents that we consider necessary.</li>
                        <li>The submitted documents (other than driving license, national ID, internal or international passport) should be issued no more than three months prior to the date of identification and should list your name and your current address. In providing us or our subcontractors with this or any other information that may be required, you confirm that the information is accurate and authentic. You agree to keep us updated if any of the information or document you provide changes. </li>
                        <li>You hereby agree to provide us or our subcontractors with the information we or our subcontractors’ request and you hereby permit us and our subcontractors to keep a record of such information.</li>
                        <li>You authorise us and our subcontractors to make inquiries, whether directly or through third parties, that we and our subcontractors consider necessary to verify your identity, to ensure enforcement of geographic restrictions or protect you and/or us against fraud or other financial crime, and to take action we reasonably deem necessary based on the results of such inquiries</li>
                        <li>We shall have the right to verify your identity on an ongoing basis. We reserve the right to request up-to-date documents from you and/or represented entity, even though you have passed identity verification in the past.</li>
                    </ol>
                </li>

                <li>
                    <h4>Token Functionalities. Information Materials</h4>
                    <ol>
                        <li>The Token may provide you with one or more specific access, admission, participation, engagement, or interaction functionalities related to the Project, as further described in the related Information Materials (“Token Functionalities”). You are expected to purchase and own Tokens for the purpose of using Tokens in relation to the Project. By participating in the Token Sale, you represent and warrant that you are not purchasing Tokens for the purpose of speculative investment, regular investment or wealth management.</li>
                        <li>While we can define specific Token Functionalities before the Token Sale, we can also do so at a later point in time. This means that the Token Functionalities of the Token are not conclusively defined at the time of the Token Sale. You hereby acknowledge and agree that we have the right to add and remove Token Functionalities at any time at our sole and absolute discretion. You hereby acknowledge and agree that by purchasing Tokens, you do not purchase the right to make use of Token Functionalities in the future. This means that you do not have a contractual right to claim any Token Functionalities. Since the addition of Token Functionalities by us is not guaranteed, you are aware of the fact that the Token may not provide you with any Token Functionalities at all</li>
                        <li>You hereby acknowledge and agree that (i) we are under no obligation to update and maintain Information Materials, (ii) we may at any time, at our sole and absolute discretion, modify the integration of the Token into the Project, our projects, portfolios, products, services and related infrastructure and the design, manner and provisions of Information Materials, (iii) Information Materials are for general information purposes only and may be amended by us from time to time without notice to you, and (iv) Information Materials do not form any part of a contract, arrangement or understanding (or otherwise) between us and you.</li>
                    </ol>
                </li>
                <li>
                    <h4>Token Sale. Distribution</h4>
                    <ol>
                        <li>Participation in the Token Sale is subject to identity verification. However, we may refuse you to participate in the Token Sale at our sole discretion, without explaining the reasons for such refusal, at any stage, even if you passed identity verification.</li>
                        <li>We will determine the price of the Token (“Purchase Price”) at our sole discretion and we may set separate Purchase Prices for each and any round of the Token Sale as well as we may set different Purchase Prices for the same round of the Token Sale. You hereby acknowledge and agree that we are free to change the Purchase Price at any time and at our sole discretion. We may also set a specific allocation of Tokens available for purchase. We may divide purchasers into several groups (tiers), set specific participation criteria for each of such groups (tiers) and set specific allocation of Tokens available for purchase for each of such groups (tiers).</li>
                        <li>The payment for Tokens shall be made by the transfer of Ethereum blockchain assets specified at the Website, including, but no limited to, USDT and USDC. For the purposes of these Terms, 1 USD shall be equal to 1 USDT or 1 USDC and vice versa. You shall make the payment for Tokens by transferring applicable crypto assets to our blockchain wallet address. We will inform you of our wallet address or our other blockchain identifiers. You hereby acknowledge and agree that it is your responsibility to check the correctness of the wallet or smart contract address where you make a payment for Tokens notwithstanding if it is made via automated means or not.</li>
                        <li>We may set additional rules for the release and distribution of Tokens purchased at specific rounds of the Token Sale. This may include that Tokens would be made available to you in several instalments or may be locked for a specific time after the Token Sale. The rules of distribution, lock-up and release are set in these Terms and/or our Informational Materials, provided that such rules are subject to change at our sole discretion. We may also set a specific allocation of Tokens available for purchase. You hereby acknowledge and agree that the payment of the Purchase Price may not entitle you to transfer the purchased Tokens until a later period in time. It is your responsibility to check the rules of distribution, lock-up and release at the Informational Materials before purchasing Tokens.</li>
                        <li>The release of Tokens to you will be made through the technical functionality of claiming available (unlocked) portions of Tokens on the Website or any other website determined by us at our sole and absolute discretion, including the functionality of related smart contracts (“Claiming Functionality”). Your Connected Wallet, used for the payment for Tokens, will be whitelisted within the Claiming Functionality upon your identity verification and receipt of payment. You hereby acknowledge and agree that the Connected Wallet must be all the time under your direct or indirect control and shall not be under the direct or indirect control of any third party. We shall have the right at our sole and absolute discretion to release any portions of Tokens to the address of your Connected Wallet instead of releasing Tokens through the Claiming Functionality.</li>
                        <li>We have the right to change the blockchain network for issuance of the Token at our sole and absolute discretion prior to the Token Generation Event. In case we decide to change the blockchain network for issuance of the Token, we will inform you and request you to provide your blockchain wallet address at that newly specified blockchain network for whitelisting within (15) days from such request</li>
                        <li>Tokens purchased at Private Sale and Presale rounds of the Token Sale shall be subject to a twelve (12) month lock-up period commencing from the date of the Token Generation Event and, at the end of such lock-up period, shall then be unlocked linearly over a twenty (20) month period over the course of 20 equal monthly instalments. You hereby acknowledge and agree that it is your sole responsibility to claim unlocked Tokens through the Claiming Functionality.</li>
                        <li>We may offer and sell Tokens in multiple rounds or events at different times and on different terms and conditions. We are under no obligation to amend and restate the conditions of your purchase of Tokens. Any unsold Tokens through any rounds of the Token Sale or at the time of a Token Generation Event shall initially be retained by us and can thereafter be dealt with by us at our sole and absolute discretion. You acknowledge and agree that not all of the total supply of Tokens would be distributed through the Token Sale, we have the right to distribute any number of Tokens free of charge or at any price to any persons for any purpose.</li>
                    </ol>
                </li>
                <li>
                    <h4>Acknowledgments</h4>
                    <ol>
                        <li>You hereby acknowledge and agree with the inherent risks involved in participating in the Project, encompassing private community shelters program, software applications, technical ecosystems and networks. You hereby acknowledge and agree that the successful completion of the Project, as well as the potential functionality of Tokens, cannot be guaranteed. You are fully aware of such risks and accept them as part of your participation in the Token Sale.</li>
                        <li>You hereby acknowledge and agree that the Project’s advertised concepts and aspirations serve as guiding principles rather than concrete guarantees, the ideas and forecasts presented in Informational Materials may not accurately reflect the future state of the Project, certain concepts discussed may be theoretical and could surpass current technical knowledge and capabilities as well as legal and regulatory constraints, including considerations for dual-use goods and technologies, could affect the feasibility of these concepts. You are fully aware of such risks and accept them as part of your participation in the Token Sale.</li>
                        <li>You hereby acknowledge and agree that Tokens do not and shall not be construed to grant you any kind of the right to convert Tokens into our shares or shares of any of our Affiliates or other equity, do not and shall not be construed to grant you any other right whatsoever, do not and shall not be construed to represent or confer any ownership right or stake, share or security or equivalent rights, voting right or any right to receive dividends, future revenue shares, intellectual property rights or any other form of participation in Pandemic Coin Project and/or any of our Affiliates and/or the Project.</li>
                        <li>You hereby acknowledge and agree that Tokens are not and shall not be construed to grant you any license or right of any nature with respect to any intellectual property rights, rights of publicity, or equivalent rights in or related to the Project. You hereby acknowledge and agree that Tokens do not and shall not be construed to grant you any kind of the right to receive or obtain any crypto assets, whether issued by us or not.</li>
                        <li>You hereby acknowledge and agree that your purchase of Tokens does not involve the purchase of shares or any equivalent in any existing or future public or private company, corporation, partnership or other entity in any jurisdiction. You hereby acknowledge and agree that the purchase of Tokens is not meant to generate any profit, interest, gain, dividend nor even to maintain the substance of your contribution, but only allows you to benefit from Token Functionalities, if any.</li>
                        <li>You hereby acknowledge and agree that we have no debt towards you with respect to Tokens and will have no obligation to buy back any Token from you. The Token is not and will never represent a loan to us or any of our Affiliates. The purchase of Tokens is final, the payment for the purchase of Tokens is non-refundable</li>
                        <li>You hereby acknowledge and agree that any funds received by us through the Token Sale or for the sale of Tokens (“Received Funds”) are our revenue and will be utilised by us at our sole discretion. To avoid any doubt, we will not and shall not be obliged to disclose, publish or anyhow make available any or portion of the information relating to our usage or spending of such Received Funds, or account for such Received Funds. You shall never expect that we would use Received Funds in a way that may impact the price, value or availability of Tokens.</li>
                        <li>You hereby represent and warrant that you will follow and comply with our requirements set for participation in the Project, using or consuming the Project, any community rules related to our it.</li>
                        <li>You hereby acknowledge and agree that blockchain, tokens, wallet gateways and smart contract technologies are still in an early development stage and their application of experimental nature. They, therefore, carry significant operational, technological, financial, regulatory and reputational risks. You are fully aware of such risks and accept them as part of your participation in the Token Sale.</li>
                    </ol>
                </li>
                <li>
                    <h4>Your Representations and Warranties</h4>
                    <ol>
                        <li>By participating in the Token Sale, and/or purchasing Tokens, you hereby represent, warrant and covenant to the following:
                            <ol>
                                <li>You have the full legal capacity to contract, power and authority to execute and deliver these Terms, and to perform your obligations hereunder. The execution and delivery of, and performance under, these Terms require no approval or other action from any person other than you;</li>
                                <li>You will not knowingly sell, donate, gift or transfer, directly or indirectly, Tokens to any person specified in the Section 3(b);</li>
                                <li>You purchase Tokens for your own use and utility, to participate in the Project and not for investment, wealth management, speculative or ﬁnancial purposes. You will not manipulate the price of Tokens in any way and will not use Tokens for any other kind of market manipulation;</li>
                                <li>
You have the knowledge, experience, understanding, professional advice and information to make your own evaluation of the merits and risks of such Tokens. You should not acquire or hold Tokens unless you have sufficient financial resources and can afford to lose all value of the Tokens;</li>
                                <li>There are no actions or investigations, pending or threatened before or by any governmental authority against you which, if determined adversely, could reasonably be expected to have a material adverse effect on your ability to enter into and perform your obligations under these Terms</li>
                                <li>There is no unsatisﬁed judgment or any open injunction binding upon you which could reasonably be expected to have a material adverse effect on your ability to enter into and perform your obligations under these Terms;</li>
                                <li>Any funds and crypto assets used to pay for Tokens have no origins that may be connected to any breach of money laundering or financing of terrorism regulations whatsoever or to any criminal activity, as defined in the jurisdiction of origin, or internationally, and have a clear and non-criminal origin;</li>
                                <li>If you act on behalf of a legal entity, you make the same representations with respect to your directors (or equivalent) and senior executive oﬃcers, and your aﬃliates and their respective directors (or equivalent) and senior executive oﬃcers.</li>
                            </ol>
                        </li>
                    </ol>
                </li>
                <li>
                    <h4>Disclaimer of Risks</h4>
                    <ol>
                        <li>Token-related risks. Participation in the Token Sale, purchasing, using and holding Tokens, interaction with smart contracts involves significant risks and potential for financial losses, including, without limitation, the following:

                            <ol>
                                <li>the features, functions, characteristics, operation, use and other properties of any crypto assets, including Tokens (“Asset Properties”) and smart contracts, blockchains, distributed ledgers, networks, protocols, systems, and other technology (“Underlying Technology”) used to administer, create, issue, transfer, cancel, use or transact in crypto assets may be complex, technical or difficult to understand or evaluate;</li>
                                <li>any crypto asset, including the Token, and its Underlying Technology may be vulnerable to attacks on the security, integrity or operation of the crypto asset or its Underlying Technology (“Attacks”), including Attacks using computing power sufficient to overwhelm the normal operation of a blockchain or other Underlying Technology;</li>
                                <li>any smart contract may be vulnerable to Attacks, including phishing attacks. Any smart contract or blockchain may cease to operate as expected due to various reasons, including Attacks, enforcement and regulatory activities, scamming activities, technical and communication issues. We do not make any representation and warranty that these smart contracts and blockchains are safe, secure, verified or verifiable, or of any value or quality or legality. We do not make any representation and warranty that the distribution of Tokens would not be delayed or not be executed due to the transaction volume on blockchains, Attacks and/or similar events;</li>
                                <li>any Underlying Technology may change or otherwise cease to operate as expected due to a change made to the Underlying Technology, a change made using features or functions built into the Underlying Technology or a change resulting from an Attack. These changes may include, without limitation, a “fork” or “rollback” of the crypto asset or blockchain;</li>
                                <li>any crypto asset, including the Token, may decrease in value or lose all of its value due to various factors including the discovery of wrongful conduct, market manipulation, changes to Asset Properties or perceived value of Asset Properties, Attacks, and other factors outside our control;</li>
                                <li>if your private key gets lost or stolen, your crypto assets, including Tokens, will be unrecoverable and will be permanently lost;</li>
                                <li>any Underlying Technology may be exposed to attacks by hackers or other individuals that could result in theft or complete loss of crypto assets, including Tokens.</li>
                            </ol>
                        </li>
                        <li>Project-related and business-related risks. Participation in the Token Sale and further participation in the Project, involves significant risks and potential for financial losses, including, without limitation, the following:
                            <ol>
                                <li>the Project inherently encompasses various risks and uncertainties that may significantly affect its progress, outcomes, and ultimate success. These risks include, but are not limited to, technical complexities, unforeseen challenges, market volatility, regulatory changes, and the potential for project failure;</li>
                                <li>the execution of the Project involves the utilisation of sophisticated technologies and methodologies, which may be subject to technical limitations, constraints, or deficiencies. Such limitations may arise from factors such as incomplete understanding of underlying principles, imperfect execution, or unanticipated interactions with other systems or components;</li>
                                <li>operational challenges, including resource constraints, logistical hurdles, personnel limitations, and coordination issues, may arise during the implementation of the Project. These challenges have the potential to impede Project timelines, escalate costs and thus affect the final standing of the Project and private community shelters program;</li>
                                <li>the Project is subject to stringent legal and regulatory requirements imposed by governmental authorities, industry standards bodies, and other relevant stakeholders. Changes in regulations or interpretations thereof may impact Project execution or outcomes;</li>
                                <li>the Project may fail to achieve its intended objectives or deliver anticipated results. Contributing factors to such failure may include technical malfunctions, market shifts, regulatory non-compliance, force majeure events, or unforeseeable circumstances beyond our control;</li>
                                <li>the funding for the Project may be subject to budgetary constraints, leading to limitations in project scope, resource allocation, or quality of infrastructure. Budgetary uncertainties, cost overruns, or insufficient funding may impact the final standing of the Project</li>
                            </ol>
                        </li>
                        <li>You hereby assume and agree that we will have no responsibility or liability for such risks described in this Section 9. You hereby irrevocably waive, release and discharge any and all claims, whether known or unknown to you, against Pandemic Coin Project, its Affiliates and their Representatives related to any of the risks set forth herein.</li>
                        <li>You should not acquire or hold Tokens unless you have sufficient financial resources and can afford to lose all value of the Tokens.</li>
                    </ol>
                </li>
                <li>
                    <h4>Taxation</h4>
                    <ol>
                        <li>It is your responsibility to determine whether, and to what extent, any taxes apply to your purchase and/or use of Tokens, and to withhold, collect, report and remit the correct amounts of taxes to the appropriate tax authorities. By purchasing, holding, or using Tokens, and to the extent permitted by law, you agree not to hold us or our Affiliates and our/their respective shareholders, members, directors, officers, employees, agents and representatives liable for any tax liabilities arising from the purchase, ownership or use of the Tokens.</li>
                    </ol>
                </li>
                <li>
                    <h4>Website</h4>
                    <ol>
                        <li>Our Website is offered on a self-service basis in accordance with the terms and conditions of these Terms. All users are responsible for ensuring that they are accessing the Website via secure and trustworthy sources or devices. You hereby acknowledge and agree that we have no obligation to enhance, modify or replace any part of our Website or to continue developing or releasing new versions of the Website.</li>
                        <li>Links to third-party materials (including without limitation, websites) may be provided as a convenience but are not controlled by us. You acknowledge and agree that we are not responsible for any aspect of the information, content, or services contained in any third-party materials or on any third-party sites accessible or linked from the Website.</li>
                        <li>We cannot and do not represent or guarantee that any of the information available through the Website is accurate, reliable, current, complete, valid, stable or appropriate for your needs. We do not guarantee the timeliness of the technology or information involved in the Website. We disclaim any liability for any loss or damage should you use or view the information available through the Websit</li>
                        <li>You must not: i) violate any law, regulation, contract, intellectual property or other third-party right, or commit a tort while using the Website, ii) use the Website in any manner to engage in any fraud, money-laundering, or terrorist activities, or other activities that are illegal under applicable laws or regulations, iii) use the Website to display, stream or promote any pornographic, defamatory, libellous, threatening, harassing, hateful, abusive, or inflammatory content, iv) introduce to the Website any malware, virus, worms, Trojan horses, logic bombs, or other harmful material, v) develop any third-party applications that interact with the Website, or any of its parts or functionalities, without our prior written consent, or unless otherwise agreed, vi) harvest or collect email addresses or other contact information of our other users, vii) send junk mail or spam to our other users, including without limitation unsolicited advertising, promotional materials, or other solicitation material, viii) use the Website or our services in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Website, or that could damage, disable, overburden, or impair the functioning of the Website in any manner, ix) encourage or induce any third party to engage in any of the activities prohibited under these Terms</li>
                        <li>The Website, including any enhancements, derivatives and improvements thereof, are the sole property of us. All the text, videos, documents, images, sounds, music, marks, logos, informational materials, user interfaces, compilations (meaning the collection, arrangement and assembly of information), charts, diagrams, graphs, market data and other content that forms a part of the Website (collectively, the “Content”) are the sole property of us, our affiliates and licensors. </li>
                        <li>We hereby grant you a limited, revocable, non-exclusive, non-transferable license, subject to the terms and conditions of these Terms, to access and use the Website and Content solely for purposes approved by us from time to time. Any other use of the Website or Content is expressly prohibited and all other rights, title, and interest in the Website or Content are exclusively the property of us, our affiliates and licensors. </li>
                        <li>Nothing in these Terms shall grant you any of such property rights and/or ownership rights and shall not be considered as an assignment of such rights. Other than access to our services in accordance with the Terms, we do not in any way grant our users any license or other intellectual property rights. You must not (nor attempt to) copy, decompile, reverse engineer, disassemble, derive the source code of, modify, or create derivative works of the Website or any other part of the Content or in any other way manipulate the Website.</li>
                        <li>Without prior approval and express written permission, you may not create frames around our Website or use other techniques that alter in any way the visual presentation or appearance of our Website.</li>
                    </ol>
                </li>
                <li>
                    <h4>Warranties</h4>
                    <ol>
                        <li>EXCEPT FOR THE EXPRESS WARRANTIES SET FORTH IN THESE TERMS, WE HEREBY DISCLAIM ALL EXPRESS OR IMPLIED WARRANTIES WITH REGARD TO THE WEBSITE, WHERE TOKEN SALE IS CONDUCTED, SMART CONTRACTS, TOKENS, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT AND QUALITY. WE MAKE NO REPRESENTATIONS OR WARRANTIES REGARDING THE RELIABILITY, AVAILABILITY, FUNCTIONALITY, TIMELINESS, SUITABILITY, ACCURACY OR COMPLETENESS OF THE WEBSITE AND/OR TOKENS. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE DO NOT REPRESENT OR WARRANT THAT: (I) THE OPERATION OR USE OF THE WEBSITE OR SMART CONTRACTS WILL BE TIMELY, UNINTERRUPTED OR ERROR-FREE; OR (II) THE QUALITY AND FUNCTIONALITY OF THE WEBSITE, SMART CONTRACTS OR TOKENS WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS.</li>
                        <li>YOU ACKNOWLEDGE AND AGREE THAT WE DO NOT CONTROL THE TRANSFER OF DATA OVER COMMUNICATIONS FACILITIES, INCLUDING THE INTERNET AND BLOCKCHAINS, AND THAT THE WEBSITE, THE ECOSYSTEM AND SMART CONTRACTS MAY BE SUBJECT TO LIMITATIONS, DELAYS, AND OTHER PROBLEMS INHERENT IN THE USE OF SUCH COMMUNICATIONS FACILITIES. WE ARE NOT AND SHALL NOT BE RESPONSIBLE FOR ANY DELAYS, DELIVERY FAILURES, OR OTHER DAMAGE RESULTING FROM SUCH PROBLEMS. WITHOUT LIMITING THE FOREGOING, WE DO NOT WARRANT OR GUARANTEE THAT ANY OR ALL SECURITY ATTACKS WILL BE DISCOVERED, REPORTED OR REMEDIED, OR THAT THERE WILL NOT BE ANY SECURITY BREACHES BY THIRD PARTIES. EXCEPT WHERE EXPRESSLY PROVIDED OTHERWISE BY US, THE WEBSITE, SMART CONTRACTS AND TOKENS ARE PROVIDED TO YOU ON AN “AS IS”, “AS DEVELOPED” AND “AS AVAILABLE” BASIS.</li>
                        <li>YOU FURTHER ACKNOWLEDGE THAT WE DO NOT ACT AS YOUR BROKER-DEALER, INTERMEDIARY, AGENT OR ADVISOR AND OWE YOU NO FIDUCIARY DUTY. ANY COMMUNICATION BY US TO YOU SHALL NOT BE CONSTRUED UNDER ANY CIRCUMSTANCES AS LEGAL, TAX, ACCOUNTING OR FINANCIAL ADVICE. OUR TOKEN SALE AND YOUR PURCHASE OF TOKENS SHALL NOT BE CONSTRUED AS THE FACILITATION OF ANY SALE OR EXCHANGE OF SECURITIES AS AN EXCHANGE</li>
                    </ol>
                </li>
                <li>
                    <h4>Limitation of Liability</h4>
                    <ol>
                        <li>IN NO EVENT WE WILL BE LIABLE UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY: (I) FOR ANY INDIRECT, EXEMPLARY, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES; (II) FOR LOSS OF USE, INACCURACY, COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, LOSS OF PROFITS, DATA OR BUSINESS INTERRUPTION; OR (III) FOR ANY MATTER BEYOND OUR REASONABLE CONTROL, WHETHER OR NOT FORESEEABLE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH LOSS OR DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN HAS FAILED ITS ESSENTIAL PURPOSE.</li>
                    </ol>
                </li>
                <li>
                    <h4>Indemnification</h4>
                    <ol>
                        <li>You agree to defend, indemnify and hold harmless Pandemic Coin Project, its Affiliates and its/their respective shareholders, members, directors, officers, employees, agents and representatives from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney’s fees) arising out of or related to: (i) your participation in the Token Sale, purchase, using, owning and holding of Tokens; (ii) your misrepresentation or provision wrong, misleading information, documents for identity verification; (iii) your violation of any provision of these Terms, including without limitation your breach of any of the representations and warranties above; (iv) your violation of any applicable law, rule or regulation; (v) any actual or alleged breach of your representations, warranties, or obligations set forth in these Terms; (vi) negligent or wilful misconduct; or (vii) any other party’s access and use of other appropriate security code. The foregoing shall include the actions of any third party who wrongfully commit these actions under your account or utilising your password and/or private keys.</li>
                    </ol>
                </li>
                <li>
                    <h4>General Terms</h4>
                    <ol>
                        <li>We shall not be liable for any damage or interruptions caused by any computer viruses, spyware, scareware, Trojan horses, worms or other malware that may affect your computer or other equipment, or any phishing, spoofing or other attack. We advise the regular use of reputable and readily available virus screening and prevention software. You should also be aware that email services are vulnerable to spoofing and phishing attacks and should use care in reviewing messages purporting to originate from us.</li>
                        <li>By providing us with feedback, such as comments, bug reports, or suggestions for improvements on the Website, by email or by any other means of communication you grant us the unrestricted right to utilise that feedback in any way we see fit, without any further compensation owed to you. Furthermore, you are conferring upon us a long-term, unconditional, non-exclusive, worldwide license to employ the feedback for any purpose.</li>
                        <li>We may modify these Terms by providing notice of such changes, such as by sending you an email, providing notice through the Website, or updating the “Last Updated” date at the bottom of these Terms. By continuing holding or owning Tokens, you confirm your agreement to the modified Terms. </li>
                        <li>These Terms of Token Sale, the Privacy Policy, and all other documents incorporated by reference herein and therein, comprise the entire agreement between you and us.</li>
                        <li>Section headings in these Terms are for convenience only, and shall not govern the meaning or interpretation of any provision of these Terms.</li>
                        <li>These Terms are personal to you, you cannot transfer or assign your rights, licenses, interests and/or obligations to anyone else. We may transfer or assign our rights, licenses, interests and/or our obligations at any time, including as part of a merger, acquisition or other corporate reorganization involving the project.</li>
                        <li>If any provision of these Terms is determined to be invalid or unenforceable under any applicable law, this will not affect the validity of any other provision.</li>
                        <li>We may not always strictly enforce our rights under these Terms. If we do this, it will be just a temporary measure and we may enforce our rights strictly again at any time.</li>
                        <li>These Terms and any information or notifications that you or we are to provide should be in English. Any translation of these Terms or other documents is provided for your convenience only. In the event of any inconsistency, the English language version of these Terms or other documents shall prevail.</li>
                        <li>Upon termination of these Terms, all sections of these Terms which by their nature should survive termination or expiration will survive, including without limitation, the following sections: Section 3, Section 4, Section 5, Section 7, Section 8, Section 9, Section 12, Section 13, Section 14, Section 15(b) and this Section 15(j)</li>
                        <li>These Terms shall be governed by and construed in accordance with the laws of the Republic of Seychelles. Any dispute controversy, or claim arising out of, or relating to, or in connection with these Terms, including with respect to the formation, applicability, breach, termination, invalidity, enforceability or any dispute regarding non-contractual obligations arising out of or relating to such obligations, shall be subject to the exclusive jurisdiction of courts of the Republic of Seychelles.</li>
                    </ol>
                </li>
            </ol>
        </div>
        <div className="">
        <InputField 
            register={register}
            errors={errors}
            required={true}
            name='agree'
            type='checkbox'
            label='I agree on Terms and Conditions'
            classNames={{label: 'ml-3 font-extraLight'}}
            value={user?.agreedTerms}
        />
        </div>
        <Button 
            type='submit'
            label='Buy $PDC'
            className='w-fit'
            loading={loading}
        />
    </form>
  )
}

export default PrivateSaleAgreement