import { AfterViewInit, Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js/auto';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  metrics = [
    { label: 'Total Sales', value: '$12,500' },
    { label: 'Transactions', value: '320' },
    { label: 'Customers', value: '85' },
    { label: 'Refunds', value: '5' }
  ];

  transactions = [
    { id: 'TXN001', customer: 'John Doe', amount: '$250', status: 'Completed' },
    { id: 'TXN002', customer: 'Jane Smith', amount: '$80', status: 'Pending' },
    { id: 'TXN003', customer: 'Mike Brown', amount: '$320', status: 'Completed' },
    { id: 'TXN004', customer: 'Sarah Wilson', amount: '$150', status: 'Completed' }
  ];

  @ViewChild('salesChart', { static: false }) salesChart!: ElementRef;
  @ViewChild('categoryChart', { static: false }) categoryChart!: ElementRef;
  
  private salesChartInstance!: Chart;
  private categoryChartInstance!: Chart;

  ngAfterViewInit() {
    this.createSalesChart();
    this.createCategoryChart();
  }

  ngOnDestroy() {
    this.destroyCharts();
  }

  private createSalesChart() {
    const ctx = this.salesChart.nativeElement.getContext('2d');

    this.salesChartInstance = new Chart(ctx, {
      type: 'bar' as ChartType,
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Sales ($)',
          data: [1200, 1500, 1800, 1700, 1900, 2200, 2500],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  private createCategoryChart() {
    const ctx = this.categoryChart.nativeElement.getContext('2d');

    this.categoryChartInstance = new Chart(ctx, {
      type: 'pie' as ChartType,
      data: {
        labels: ['Electronics', 'Clothing', 'Groceries', 'Accessories'],
        datasets: [{
          label: 'Category Sales',
          data: [5000, 3000, 2500, 1500],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  private destroyCharts() {
    if (this.salesChartInstance) this.salesChartInstance.destroy();
    if (this.categoryChartInstance) this.categoryChartInstance.destroy();
  }
}
