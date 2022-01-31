import { ContentComponent } from './components/blog/content/content.component';
import { ProjectosComponent } from './components/projectos/projectos.component';
import { BlogComponent } from './components/blog/blog.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacto', component: ContacteComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-content/:id', component: ContentComponent},
  {path: 'projectos', component: ProjectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
