import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContacteService } from './contacte.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.scss']
})
export class ContacteComponent implements OnInit {

  public formValue !: FormGroup
  public loading = false;
  public assunto : any

  constructor(private formBuilder : FormBuilder, private service : ContacteService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formInstance()
    this.getAssunto()
  }

  formInstance(){
    this.formValue = this.formBuilder.group({
      primeiroNome: new FormControl('', [Validators.required]),
      ultimoNome: new FormControl('', [Validators.required ]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      assunto: new FormControl('', [Validators.required]),
      mensagem: new FormControl('', [Validators.required]),

    })
  }
  
  postFaleconnosco(){
    this.loading = true;
    const {primeiroNome, ultimoNome, telefone, email, assunto, mensagem} = this.formValue.value
    const dados = {primeiroNome, ultimoNome, telefone, email, assunto, mensagem}

    this.service.postFaleConnosco(dados).subscribe(data => {
      console.log("data", data);
      this.toastr.success('Mensagem enviada', 'Sucesso!');
      this.loading = false;
      this.formValue.reset()
    },
    err=>{
      this.loading = true;
      this.toastr.error('Mensagem não enviada', 'Erro!');
    })
  }

  getAssunto(){
    this.service.getAssunto().subscribe(data => {
      this.assunto = data
    })
  }


}
