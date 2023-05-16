import { Injectable } from '@angular/core';
import { Member } from "./member.interface";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members: Member[] = [
    {
      name: "Meriton Spahiu",
      title: "CEO",
      description: "Meriton Spahiu is the founder and CEO of a number of successful Swiss real estate construction, renovation, and development companies with hundreds of employees. He has a 18-year track record in managing real estate projects in Zurich and central Switzerland.",
      roleDescription: "Mr. Spahiu oversees Investor Relations, Partnerships and Expansion.",
      picture: "assets/images/members/Meriton_team.jpg"
    },
    {
      name: "Arber Behluli",
      title: "Founder/CTO",
      description: "Arber Behluli brings 15 years of experience in creating, selling, and distributing financial and insurance products to retail and institutional investors. In addition, he has been heading up the management team of a Swiss marketing agency, providing corporate identity, branding, design, web and social media services, and commercial services, including designing e-commerce shops and imple-menting sophisticated technical and commercial infrastructure environments and security systems. He has also been a senior advisor to several crypto token launch projects.",
      roleDescription: "Mr. Behluli serves as Chief Technical Officer, overseeing the Development Team, Community Management Team, Technical Infrastructure and Security.",
      picture: "assets/images/members/Arber_team.jpg"
    },
    {
      name: "Zarpana ZAHORY",
      title: "CO-FOUNDER | CMO",
      description: "Zarpana Zahory is one of the most successful Swiss businesswomen under 40. A born entrepreneur, she decided early on to follow in her family" + "'" + "s entrepreneur-ial footsteps by starting her first business in the Swiss health & beauty sector at 25. Focusing on the top-end of the market, she has created a unique premium brand that has now grown to include five branches across Switzerland.",
      roleDescription: "Outside of her entrepreneurial activities, Ms. Zahory is a seed investor in various international tech, fintech, and blockchain projects and where she is involved in an advisory capacity. In addition to her role as an investor, Ms. Zahory oversees Corporate Design & Identity, Branding, Communications, and Product Innovation.",
      picture: "assets/images/members/Zarpana_team.jpg"
    },
    {
      name: "Tilman J. SCHULTZ",
      title: "CO-FOUNDER / CFO",
      description: "Tilman J. Schultz brings twenty years of experience in investment banking and blue-chip technology companies, with strong negotiation skills and a proven track record in structuring and designing innovative institutional client solutions and leading banking integration projects.",
      roleDescription: "Mr. Schultz" + "'" + "s core expertise is in algorithmic trading and alternative investments, with a focus on hedge funds and alternative investment funds, wealth managers, and private banking. He is an expert on family office design, corporate governance and oversight, wealth management and has served as a core member of the man-agement team of a highly successful DeFi lending, borrowing, and asset man-agement platform. Mr. Schultz serves as Chief Financial Officer, overseeing Legal, Compliance, Risk Management, Corporate Governance, Investor Relations, and the Tokenization Team.",
      picture: "assets/images/members/Tilman_team.jpg"
    },
  ]

  constructor() { }

  getMembers() {
    return this.members.slice();
  }

  getMember(index: number) {
    return this.members[index];
  }



}
