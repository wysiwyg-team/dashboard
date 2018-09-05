import {Component, NgModule, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {ProgressbarComponent, ProgressbarModule} from 'ngx-bootstrap';


@Component({
    templateUrl: 'dashboard.component.html'
})


export class DashboardComponent implements OnInit {

    // barchart
    public barChartData: any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Custom Label A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Custom Label B'}
    ];
    public barChartLabels: string[] = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet'];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartOptions: any = {
        scaleShowVerticalLines: true,
        responsive: true
    };

    // barChart1
    public barChart1Data: Array<any> = [
        {
            data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
            label: 'Custom Label'
        }
    ];

    public barChart1Labels: Array<any> = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];
    public barChart1Options: any = {
        tooltips: {
            enabled: false,
            custom: CustomTooltips
        },
        legend: {
            display: true
        },
        scaleShowVerticalLines: true,
        responsive: true
    };
    public barChart1Colours: Array<any> = [
        {
            backgroundColor: 'rgba(255,255,255,.3)',
            borderWidth: 0
        }
    ];
    public barChart1Legend = true;
    public barChart1Type = 'bar';

    ngOnInit(): void {
    }


}

