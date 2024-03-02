import { Component, OnInit } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { EChartsOption } from 'echarts';
import { ThemeService } from '../switching-theme/theme.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent implements OnInit {
  faSun = faSun;
  faMoon = faMoon;
  show = false;
  viewMode = 'tab1';

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {}
  chartOption1: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [
        'JavaScript',
        'HTML/CSS',
        'Python',
        'SQL',
        'TypeScript',
        'Java',
        'C#',
        'PHP',
        'Go (Golang)',
        'Rust',
        'Kotlin',
        'Ruby',
        'Swift',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          820, 932, 901, 934, 1290, 1330, 1320, 1210, 940, 1032, 903, 1101,
          1052,
        ],
        type: 'line',
      },
    ],
  };

  chartOption2: EChartsOption = {
    title: {
      text: 'Most used programming languages among developers worldwide as of 2023',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 820, name: 'JavaScript' },
          { value: 932, name: 'HTML/CSS' },
          { value: 901, name: 'Python' },
          { value: 934, name: 'SQL' },
          { value: 1290, name: 'TypeScript' },
          { value: 1330, name: 'Java' },
          { value: 1320, name: 'C#' },
          { value: 1210, name: 'PHP' },
          { value: 940, name: 'Go (Golang)' },
          { value: 1032, name: 'Rust' },
          { value: 903, name: 'Kotlin' },
          { value: 1101, name: 'Ruby' },
          { value: 1052, name: 'Swift' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  chartOption3: EChartsOption = {
    title: {
      text: 'Most used programming languages among developers worldwide as of 2023',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 820, name: 'JavaScript' },
          { value: 932, name: 'HTML/CSS' },
          { value: 901, name: 'Python' },
          { value: 934, name: 'SQL' },
          { value: 1290, name: 'TypeScript' },
          { value: 1330, name: 'Java' },
          { value: 1320, name: 'C#' },
          { value: 1210, name: 'PHP' },
          { value: 940, name: 'Go (Golang)' },
          { value: 1032, name: 'Rust' },
          { value: 903, name: 'Kotlin' },
          { value: 1101, name: 'Ruby' },
          { value: 1052, name: 'Swift' },
        ],
      },
    ],
  };

  toggle() {
    this.show = !this.show;
    const active = this.themeService.getActiveTheme();
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
