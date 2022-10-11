import { Component, ElementRef, OnInit, ViewChild,Renderer2, AfterViewInit } from '@angular/core';

enum PAISES{
  'MEXICO','JAPON','RUSIA'
}

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit,AfterViewInit {

  @ViewChild("texto",{static:true}) texto! : ElementRef

  public PAISES = PAISES;
  public flag : boolean= true
  public platillos : any[] = [

    {
      platillo:'Taco',
      pais: PAISES.MEXICO
    },
    {
      platillo:'Gordita',
      pais: PAISES.MEXICO
    },
    {
      platillo:'Sushi',
      pais: PAISES.JAPON
    },
    {
      platillo:'Ramen',
      pais: PAISES.JAPON
    },
    {
      platillo:'Vodka',
      pais: PAISES.RUSIA
    }
  ]
  public paises: any[]=[
  {
    id: "67",
    nombre:"México"
  },
  {
    id: "45",
    nombre:"Colombia"
  },
  {
    id: "92",
    nombre:"Peru"
  }
]

  constructor(private render: Renderer2) { }
 
  

  ngOnInit(): void {
    this.getButton()
    
  }

  ngAfterViewInit(): void {
    this.render.setAttribute(this.texto.nativeElement,"id","20")
    this.render.setAttribute(this.texto.nativeElement,"class","cambio")
    this.render.setStyle(this.texto.nativeElement,"color","blue")
    console.log(this.texto)
  }

  getButton(){
    let button = document.getElementById("btn")
    button?.addEventListener("click",()=>{
      this.flag=!this.flag
    })

  }

}
