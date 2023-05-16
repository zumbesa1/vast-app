import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/shared/member.interface';
import { MemberService } from 'src/app/shared/member.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  public members: Member [] = []; 

  constructor(private memberService: MemberService) {};

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }
}
