import { Component } from '@angular/core';
import { MemberService } from 'src/services/member.service';
import { ChartDataset, ChartOptions} from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  nbMmembers:number = 0;
  nbArticles:number = 0;
  nbTools:number = 0;
  nbEvents:number = 0;

  constructor(private MS:MemberService) {
    this.nbMmembers = this.MS.tab.length;

    for(let i = 0; i<this.nbMmembers; i++) {
      this.chartLabels.push(this.MS.tab[i].name);
    }

  }

  tabArticle: number[] = [];
  getNumber():number[] {
    this.MS.getNBArticleByMember().subscribe((x)=> {
      this.tabArticle = x;
      console.log(this.tabArticle)
    })

    return this.tabArticle;
  }
  chartData: ChartDataset[] = [ // axe y
    {
      // ⤵️ Add these
      label: 'number  Articles',
      data: this.getNumber()
    }
  ];

  chartLabels: string[] = []; // axe x
  chartOptions: ChartOptions = {
    responsive: true,
  };

//pie
  tabStudentTeacher: number[] = [];
  getNumberStudentTeacher():number[] {
    this.MS.getNBStudentTeacher().subscribe((x)=> {
      this.tabStudentTeacher = x;
      console.log(this.tabStudentTeacher)
    })

    return this.tabStudentTeacher;
  }

  chartData1: ChartDataset[] = [ // axe y
    {
      // ⤵️ Add these
      label: 'number',
      data: this.getNumberStudentTeacher()
    }
  ];

  
  chartLabels1: string[] = []; // axe x
  chartOptions1: ChartOptions = {
    responsive: true,
  };
}
