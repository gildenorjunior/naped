import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { PopularPostsComponent } from './components/popular-posts/popular-posts.component';
import { RecommendedPostsComponent } from './components/recommended-posts/recommended-posts.component';

const COMPONENTS = [
  HeaderComponent,
  CardComponent,
  LatestPostsComponent,
  RecommendedPostsComponent,
  AllPostsComponent,
  PopularPostsComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
