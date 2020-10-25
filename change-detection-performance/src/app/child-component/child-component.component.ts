import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  user;
  value = 0;
  constructor(private cdRef: ChangeDetectorRef, private srv: ServiceService) {}

  ngOnInit() {
    this.srv.getUser().subscribe((user) => {
      this.user = user;
    });
  }

  ngAfterViewInit(): void {
    this.cdRef.detach();
  }

  get firstName() {
    return this.user.firstName;
  }

  get lastName() {
    return this.user.lastName;
  }

   /**
   * Se usar o detectChanges aqui, toda a árvore abaixo dele é rodada,
   * Da mesma forma que quando pararmos com o detach do afterViewInit,
   * ele parará o componente e os childs (child-component3)
   */
  onClick() {
    this.value = this.generateRandom();
    this.cdRef.detectChanges();
  }

  generateRandom() {
    return Math.floor(Math.random() * 10);
  }
}
