import { Component, OnInit } from '@angular/core';
import { SkillList } from 'src/app/models/skillsClass';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  public mySkills: SkillList[] = [
    { skillName: 'Angular', skillLevel: 'Intermediate' },
    { skillName: 'ReactNative', skillLevel: 'Intermediate' },
    { skillName: 'JavaScript', skillLevel: 'Intermediate' },
    { skillName: 'TypeScript', skillLevel: 'Intermediate' },
    { skillName: 'HTML', skillLevel: 'Intermediate' },
    { skillName: 'CSS', skillLevel: 'Intermediate' },
    { skillName: 'Python', skillLevel: 'Basic' },
    { skillName: 'Git', skillLevel: 'Intermediate' },
    { skillName: 'GitHub', skillLevel: 'Intermediate' },
    { skillName: 'SQL', skillLevel: 'Intermediate' },
    { skillName: 'MySQL', skillLevel: 'Intermediate' },
    { skillName: 'PHP', skillLevel: 'Intermediate' },
    { skillName: 'ASM', skillLevel: 'Basic' },
    { skillName: 'Microsoft Office', skillLevel: 'Advanced' },
    { skillName: 'Microsoft Excel', skillLevel: 'Advanced' },
    { skillName: 'Microsoft Word', skillLevel: 'Advanced' },
    { skillName: 'Microsoft PowerPoint', skillLevel: 'Advanced' },
    { skillName: 'Microsoft Power Automate', skillLevel: 'Advanced' },
    { skillName: 'Microsoft Power Apps ', skillLevel: 'Intermediate' },
    { skillName: 'Google DialogFlow ', skillLevel: 'Intermediate' },
    { skillName: 'Electrical Circuit Analysis', skillLevel: 'Intermediate' },
  ];
  public skillShown = '';
  private value = false;

  getContent(skill: SkillList) {
    this.skillShown = skill.skillName;
  }
  onBlur(): void {
    console.log('Not focused');
  }
  onFocus(): void {
    console.log('In focus');
  }
}
