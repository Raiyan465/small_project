import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  title: string | null = "";

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.paramMap.get("blog_name")
  }

}
