import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public mySkills: any[] = [
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
  public skillShown: any;
  private value = false;

  constructor() {}

  getContent(skill: any) {
    this.skillShown = skill.skillName;
  }

  ngOnInit(): void {}
}
