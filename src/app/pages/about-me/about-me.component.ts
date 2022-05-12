import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import SkillData from '../../../assets/data/skills.json';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  skills: Skill[] = SkillData;

  constructor() {}

  ngOnInit(): void {}
}
