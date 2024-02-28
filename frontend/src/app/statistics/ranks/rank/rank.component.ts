import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map } from 'rxjs';
import { Job } from 'src/app/job/job.types';
import { StatisticsService } from '../../statistics.service';
import { RankMetaData, RankOptions } from './rank.data';
import { RouterLink } from '@angular/router';
import { RankData } from './rank.types';

@Component({
  selector: 'vgm-rank',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent implements OnInit, OnChanges {
  @Input() jobs$?: Observable<Job[]>;
  @Input() rankType: string | undefined;
  @Input() rankSize: number | undefined;

  rankData$!: Observable<RankData[]>;
  rankMetaData!: RankMetaData;
  jobsQuantity!: Observable<number>;

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    const rankOptions = this.createRankOptions();
    this.rankMetaData = rankOptions[this.rankType || 'months'];
    this.jobsQuantity = this.statisticsService.getJobsCount(this.jobs$);

    this.rankData$ = this.rankMetaData.getRank(this.jobs$);
    if (this.rankSize)
      this.rankData$ = this.rankData$.pipe(map((rankData) => rankData.slice(0, this.rankSize)));
  }

  ngOnChanges(): void {
    if (this.rankMetaData) {
      this.rankData$ = this.rankMetaData.getRank(this.jobs$);
      if (this.rankSize)
        this.rankData$ = this.rankData$.pipe(map((rankData) => rankData.slice(0, this.rankSize)));
    }
  }

  private createRankOptions(): RankOptions {
    return {
      months: {
        name: 'Meses com mais vagas publicadas',
        icon: 'bx bxs-calendar',
        dataColumnName: 'Mês',
        routerLink: '/stats/meses',
        getRank: this.statisticsService.getMonthsRank.bind(this.statisticsService),
      },
      education: {
        name: 'Ranking de Grau de Escolaridade',
        icon: 'bx bxs-graduation',
        dataColumnName: 'Nível',
        routerLink: '/stats/educacao',
        getRank: this.statisticsService.getEducationalLevelRank.bind(this.statisticsService),
      },
      companies: {
        name: 'Ranking de Empresas',
        icon: 'bx bxs-business',
        dataColumnName: 'Empresa',
        routerLink: '/stats/empresas',
        getRank: this.statisticsService.getCompanyRank.bind(this.statisticsService),
      },
      experience: {
        name: 'Ranking de Experiência',
        icon: 'bx bxs-user-detail',
        dataColumnName: 'Nível',
        routerLink: '/stats/experiencia',
        getRank: this.statisticsService.getExperienceLevelsRank.bind(this.statisticsService),
      },
      workplace: {
        name: 'Ranking de Modalidades',
        icon: 'bx bxs-home',
        dataColumnName: 'Modalidade',
        routerLink: '/stats/modalidades',
        getRank: this.statisticsService.getWorkplaceRank.bind(this.statisticsService),
      },
      technology: {
        name: 'Ranking de Tecnologias',
        icon: 'bx bxs-chip',
        dataColumnName: 'Tecnologia',
        routerLink: '/stats/tecnologias',
        getRank: this.statisticsService.getKeywordsRank.bind(this.statisticsService),
      },
      contractTypes: {
        name: 'Ranking de Tipos de Contratos',
        icon: 'bx bxs-briefcase',
        dataColumnName: 'Tipo',
        routerLink: '/stats/contratos',
        getRank: this.statisticsService.getTypesRank.bind(this.statisticsService),
      },
      inclusion: {
        name: 'Ranking de Inclusão',
        icon: 'bx bxs-heart',
        dataColumnName: 'Tipo',
        routerLink: '/stats/inclusao',
        getRank: this.statisticsService.getInclusionRank.bind(this.statisticsService),
      },
      cities: {
        name: 'Ranking de Cidades',
        icon: 'bx bxs-map',
        dataColumnName: 'Cidade',
        routerLink: '/stats/cidades',
        getRank: this.statisticsService.getCitiesRank.bind(this.statisticsService),
      },
      languages: {
        name: 'Ranking de Idiomas Estrangeiros',
        icon: 'bx bx-globe',
        dataColumnName: 'Idioma',
        routerLink: '/stats/idiomas',
        getRank: this.statisticsService.getLanguagesRank.bind(this.statisticsService),
      },
      certification: {
        name: 'Ranking de Certificação',
        icon: 'bx bxs-certification',
        dataColumnName: 'Certificação',
        routerLink: '/stats/certificacoes',
        getRank: this.statisticsService.getCertificationsRank.bind(this.statisticsService),
      },
    };
  }
}
