import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
