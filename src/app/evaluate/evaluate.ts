import { Component, signal, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Evaluation {
  courseId: number;
  contentQuality: number;
  instructorEffectiveness: number;
  difficulty: string;
  enjoyedMost: string;
  suggestions: string;
  wouldRecommend: boolean | null;
}

@Component({
  selector: 'app-evaluate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './evaluate.html',
  styleUrl: './evaluate.css'
})
export class EvaluateComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  courseId = signal<number>(0);
  evaluation = signal<Evaluation>({
    courseId: 0,
    contentQuality: 0,
    instructorEffectiveness: 0,
    difficulty: '',
    enjoyedMost: '',
    suggestions: '',
    wouldRecommend: null
  });

  courseTitle = signal('TAP Course');

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.courseId.set(+id);
    this.evaluation.update(ev => ({ ...ev, courseId: +id }));

    if (+id === 1) {
      this.courseTitle.set('TAP Course');
    } else {
      this.courseTitle.set(`Course ${id}`);
    }
  }

  onRatingChange(field: keyof Evaluation, rating: number) {
    this.evaluation.update(ev => ({ ...ev, [field]: rating }));
  }

  submitEvaluation() {
    console.log('Evaluation submitted:', this.evaluation());
    alert('Evaluation submitted successfully! Thank you for your feedback.');
    this.router.navigate(['/dashboard']);
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}