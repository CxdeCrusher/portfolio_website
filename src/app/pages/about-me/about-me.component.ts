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
  databases: Skill[] = [];
  tools: Skill[] = [];

  constructor(private skillsService: SkillsService) {
    this.getLanguages();
    this.getFrameworksLibraries();
    this.getPlatforms();
    this.getDatabases();
    this.getTools();
  }

  ngOnInit(): void {

  }

  private getLanguages() {
    this.skillsService.getSkillData(SkillTypes.Languages).forEach(skills => this.languages.push(...skills));
  }

  private getFrameworksLibraries() {
    this.skillsService
      .getSkillData(SkillTypes.Frameworks_libraries)
      .forEach(skills => this.frameworksLibraries.push(...skills));
  }

  private getPlatforms() {
    this.skillsService.getSkillData(SkillTypes.Platforms).forEach(skills => this.platforms.push(...skills));
  }

  private getDatabases() {
    this.skillsService.getSkillData(SkillTypes.Databases).forEach(skills => this.databases.push(...skills));
  }

  private getTools() {
    this.skillsService.getSkillData(SkillTypes.Tools).forEach(skills => this.tools.push(...skills));
  }
}
