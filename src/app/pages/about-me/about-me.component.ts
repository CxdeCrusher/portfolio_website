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
  skills: Skill[] = [];

  constructor(private httpClient: HttpClient) {
    this.getSkillData().forEach(skills => this.skills.push(...skills));
  }

  ngOnInit(): void {}

  private getSkillData(): Observable<Skill[]> {
    return this.httpClient
      .get<Skill[]>('../../../assets/data/skills.json')
      .pipe(
        map((skills: Skill[]) => {
          return skills.map(skill => ({
            skill: skill.skill,
            level: skill.level,
            yearsExperience: skill.yearsExperience,
            description: skill.description,
            imagePath: skill.imagePath
          }));
        })
      );
  }
}
