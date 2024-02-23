import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationData } from '../../ranks/education-rank/education-rank.types';
import { trackByEducationStatus } from 'src/app/shared/track-by-functions';
import { Observable } from 'rxjs';
import { Job } from 'src/app/job/job.types';
import { JobService } from 'src/app/job/job.service';
import { StatisticsService } from '../../statistics.service';
import { PublicationChartComponent } from '../../charts/publication-chart/publication-chart.component';
import { KeywordsRankComponent } from '../../ranks/keywords-rank/keywords-rank.component';
import { CompaniesRankComponent } from '../../ranks/companies-rank/companies-rank.component';
import { WorkplaceRankComponent } from '../../ranks/workplace-rank/workplace-rank.component';
import { ExperienceLevelsRankComponent } from '../../ranks/experience-levels-rank/experience-levels-rank.component';
import { JobListComponent } from 'src/app/job/job-list/job-list.component';
import { EducationalDataTypes } from './education-overview.types';
import { TypeRankComponent } from '../../ranks/type-rank/type-rank.component';
import { LanguagesRankComponent } from '../../ranks/languages-rank/languages-rank.component';
import { JobPostingsComparisonComponent } from '../../comparisons/job-postings-comparison/job-postings-comparison.component';

@Component({
  selector: 'vgm-education-overview',
  standalone: true,
  imports: [
    CommonModule,
    PublicationChartComponent,
    KeywordsRankComponent,
    CompaniesRankComponent,
    WorkplaceRankComponent,
    ExperienceLevelsRankComponent,
    JobListComponent,
    TypeRankComponent,
    LanguagesRankComponent,
    JobPostingsComparisonComponent,
  ],
  templateUrl: './education-overview.component.html',
  styleUrls: ['./education-overview.component.scss'],
})
export class EducationOverviewComponent implements OnInit {
  educationRank$!: Observable<EducationData[]>;
  selectedEducationTerm!: string;

  educationalLevelRank$!: Observable<EducationData[]>;
  selectedEducationalLevelTerm!: string;

  jobsQuantity = 0;

  jobsByEducationTerm$!: Observable<Job[]>;
  jobsByEducationalLevel$!: Observable<Job[]>;

  trackByEducationTerm = trackByEducationStatus;

  selectedDataType = EducationalDataTypes.level;
  educationalDataTypes = EducationalDataTypes;

  constructor(
    private statisticsService: StatisticsService,
    private jobService: JobService,
  ) {}

  ngOnInit(): void {
    this.educationRank$ = this.statisticsService.getEducationRank();
    this.educationalLevelRank$ = this.statisticsService.getEducationalLevelRank();

    this.educationRank$.subscribe((educationRank) => {
      this.selectedEducationTerm = educationRank[0].name;
      this.jobsByEducationTerm$ = this.jobService.getJobsByEducationTerms(
        this.selectedEducationTerm,
      );
    });

    this.educationalLevelRank$.subscribe((educationalLevelRank) => {
      this.selectedEducationalLevelTerm = educationalLevelRank[0].name;
      this.jobsByEducationalLevel$ = this.jobService.getJobsByEducationalLevelTerms(
        this.selectedEducationalLevelTerm,
      );
    });

    this.jobService.jobs$.subscribe((jobs) => {
      this.jobsQuantity = jobs?.length || 0;
    });
  }

  onEducationTermClick(TypeName: string): void {
    this.selectedEducationTerm = TypeName;
    this.jobsByEducationTerm$ = this.jobService.getJobsByEducationTerms(this.selectedEducationTerm);
  }

  onEducationalLevelClick(educationalLevel: string): void {
    this.selectedEducationalLevelTerm = educationalLevel;
    this.jobsByEducationalLevel$ = this.jobService.getJobsByEducationalLevelTerms(
      this.selectedEducationalLevelTerm,
    );
  }

  setDataType(dataType: EducationalDataTypes): void {
    this.selectedDataType = dataType;
  }
}
