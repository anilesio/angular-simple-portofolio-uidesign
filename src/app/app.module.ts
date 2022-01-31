import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContacteComponent } from './components/contacte/contacte.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectosComponent } from './components/projectos/projectos.component';
import { ContentComponent } from './components/blog/content/content.component';
import { HabilidadesHomeComponent } from './components/home/habilidades-home/habilidades-home.component';
import { BlogHomeComponent } from './components/home/blog-home/blog-home.component';
import { ProjectoHomeComponent } from './components/home/projecto-home/projecto-home.component';
import { AboutHomeComponent } from './components/home/about-home/about-home.component';
import { MideasComponent } from './components/home/mideas/mideas.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContacteComponent,
    SobreComponent,
    BlogComponent,
    ProjectosComponent,
    ContentComponent,
    HomeComponent,
    BannerComponent,
    MideasComponent,
    AboutHomeComponent,
    ProjectoHomeComponent,
    BlogHomeComponent,
    HabilidadesHomeComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({
      backdropBorderRadius: "4px",
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      primaryColour: "#20a8d8",
      secondaryColour: "#20a8d8",
      tertiaryColour: "#20a8d8",
    }),
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }