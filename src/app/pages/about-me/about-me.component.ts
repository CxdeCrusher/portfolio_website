import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillTypes } from 'src/app/enums/skillTypes';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  languages: Skill[] = [];
  frameworksLibraries: Skill[] = [];
  platforms: Skill[] = [];
  cloudServices: Skill[] = [];
  databases: Skill[] = [];
  tools: Skill[] = [];

  constructor(private skillsService: SkillsService) {
    this.getSkills(SkillTypes.Languages, this.languages);
    this.getSkills(SkillTypes.Frameworks_libraries, this.frameworksLibraries);
    this.getSkills(SkillTypes.Platforms, this.platforms);
    this.getSkills(SkillTypes.Cloud_services, this.cloudServices);
    this.getSkills(SkillTypes.Databases, this.databases);
    this.getSkills(SkillTypes.Tools, this.tools);
  }

  ngOnInit(): void {}

  private getSkills(skillType: SkillTypes, skillsArray: Skill[]): Skill[] {
    this.skillsService.getSkillData(skillType).forEach(skills => skillsArray.push(...skills));

    return skillsArray;
  }
}
