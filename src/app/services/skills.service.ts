import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Skill } from '@models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  getSkillData(skillType: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`../../../assets/data/${skillType}.json`).pipe(
      map((skills: Skill[]) => {
        return skills.map(skill => ({
          name: skill.name,
          yearsExperience: skill.yearsExperience,
          description: skill.description,
          imagePath: skill.imagePath
        }));
      })
    );
  }
}
