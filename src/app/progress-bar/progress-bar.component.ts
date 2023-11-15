
import { Component,Input, OnInit, OnChanges,SimpleChanges } from "@angular/core";

@Component({
  selector:"app-progress-bar",
  template:`
  <div class="progress-bar-container" [style.backgroundColor]="backgroundColor">
    <div class="progress" [style]="{backgroundColor:progressColor, width:progress+'%'}"></div>
 </div>
  `,
  styles: [
    `
    .progress-bar-container,.progress{
      height:20px;
    }
    .progress-bar-container{
      width:100%;
    }
    `
  ],

})
export class ProgressBarComponent implements OnInit, OnChanges{
  backgroundColor ='#ccc';
  @Input() progressColor= "tomato";

  // c2 dùng tương đương vs ngOnChanges
  @Input()  set progress(val : number){
    this._progress = val;
    console.log(`Val: ${val}`)// val : là giá trị mỗi lần thay đổi
  }; // nhận giá trị tử bên ngoài(cha)
  private _progress =50;
  get progress(){
    return this._progress;
  }
  ngOnInit(): void { // là một trong lifecycle : nó sẽ đc dùng khi mà tất cả các biến trong phiên angular đã chạy xong
    console.log(`progress : ${this.progress}
                  progressColor: ${this.progressColor}`)

  }
  ngOnChanges(change: SimpleChanges){ // tương đương vs set, get
    console.log(`progress : ${this.progress}
    progressColor: ${this.progressColor}`)
  }
}
