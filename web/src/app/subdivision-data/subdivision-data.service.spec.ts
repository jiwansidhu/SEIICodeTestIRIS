import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SubdivisionService } from './subdivision-data.service';
import { SubDivision } from '../models/subdivision-data.model';


fdescribe('HttpServiceService', () => {
  let service: SubdivisionService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SubdivisionService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SubdivisionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('#getAllSubdivisions should return expected data', (done) => {
    const expectedData: SubDivision[] = [
        {
          id: 27523,
          code: "101D6",
          name: "MacDonald Highlands/Vu Estates",
          longitude: 115.03753,
          latitude: 36.008564,
          fieldSurveyTerritoryId: 1656,
          marketId: 16,
          subdivisionStatusId: 4,
          surveyMethodId: 2,
          activeSections: 0,
          futureSections: 0,
          builtOutSections: 2,
          totalLots: 0,
          fieldSurveyTerritoryName: "Henderson",
          marketName: "Las Vegas",
          marketAbbreviation: "LV",
          subdivisionStatusCode: "Builtout",
          surveyMethodCode: "DRIVE",
          county: "Clark",
          community: "MacDonald Highlands",
          zoom17Date: "2023-07-02T18:02:02.873Z",
          zoom18Date: "2023-06-30T18:26:32.957Z",
          subdivisionGeometryId: null,
          subdivisionGeometryBoundingBoxId: null,
          subdivisionGeometryBoundaryId: null,
          subdivisionGeometryIntelligenceBoundaryId: 24949,
          subdivisionGeometryIntelligenceBoundaryStatusId: 4,
          subdivisionGeometryIntelligenceBoundaryStatusCode: "Finalized",
          subdivisionGeometryIntelligenceBoundaryStatusChangeDate: "2020-08-04T00:00:00.000Z",
          nearMapImageDate: "2023-06-06T23:50:55.000Z",
          imageBoxId: 60364,
          mostRecentIPointBatchDate: "2023-04-13T00:00:00.000Z",
          iPoints: null,
          validatediPoints: null,
          subdivisionSpecificStatus: "BO 2Q21"
        },
        {
          id: 27524,
          code: "101D7",
          name: "Another Subdivision",
          longitude: -115.03754,
          latitude: 36.008565,
          fieldSurveyTerritoryId: 1657,
          marketId: 17,
          subdivisionStatusId: 5,
          surveyMethodId: 3,
          activeSections: 1,
          futureSections: 1,
          builtOutSections: 3,
          totalLots: 1,
          fieldSurveyTerritoryName: "Another Territory",
          marketName: "Another Market",
          marketAbbreviation: "AM",
          subdivisionStatusCode: "Active",
          surveyMethodCode: "WALK",
          county: "Another County",
          community: "Another Community",
          zoom17Date: "2023-07-03T18:02:02.873Z",
          zoom18Date: "2023-06-31T18:26:32.957Z",
          subdivisionGeometryId: null,
          subdivisionGeometryBoundingBoxId: null,
          subdivisionGeometryBoundaryId: null,
          subdivisionGeometryIntelligenceBoundaryId: 24950,
          subdivisionGeometryIntelligenceBoundaryStatusId: 5,
          subdivisionGeometryIntelligenceBoundaryStatusCode: "Pending",
          subdivisionGeometryIntelligenceBoundaryStatusChangeDate: "2020-08-05T00:00:00.000Z",
          nearMapImageDate: "2023-06-07T23:50:55.000Z",
          imageBoxId: 60365,
          mostRecentIPointBatchDate: "2023-04-14T00:00:00.000Z",
          iPoints: null,
          validatediPoints: null,
          subdivisionSpecificStatus: "Active 3Q21"
        }
      ];
    service.getAllSubdivisions().subscribe(data => {
        expect(data?.length).toBe(2);
        expect(data).toEqual(expectedData);
        done();
    });
    const testRequest = httpTestingController.expectOne('http://localhost:3000/v1/subdivisions');
    expect(testRequest.request.method).toBe('GET');
    testRequest.flush(expectedData);
  });

});