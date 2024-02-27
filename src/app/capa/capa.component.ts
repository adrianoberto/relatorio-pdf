import { Component } from '@angular/core';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfMake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
// import htmlToPdfmake from "html-to-pdfmake";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-capa',
  standalone: true,
  imports: [],
  templateUrl: './capa.component.html',
  styleUrl: './capa.component.css'
})
export class CapaComponent {

  gerarPDF = () => {

    var conteudo = document.querySelector('#conteudo')?.innerHTML;
    var html = htmlToPdfmake(conteudo ?? '');

    var docDefinition = {
      pageSize: 'A4',
      pageOrientation: 'landscape',
      pageMargins: [40, 60, 40, 60],
      content: [
        html
      ],
      defaultStyle: {
        fontSize: 12,
        color: 'blue',
        orientation: 'landscape'
      }      
    } as TDocumentDefinitions;

    pdfMake.createPdf(docDefinition).open();    
  }
}
