export interface SubDivision {
    id: number;
    code: string;
    name: string;
    longitude: number;
    latitude: number;
    fieldSurveyTerritoryId: number;
    marketId: number;
    subdivisionStatusId: number;
    surveyMethodId: number;
    activeSections: number;
    futureSections: number;
    builtOutSections: number;
    totalLots: number;
    fieldSurveyTerritoryName: string;
    marketName: string;
    marketAbbreviation: string;
    subdivisionStatusCode: string;
    surveyMethodCode: string;
    county: string;
    community: string;
    zoom17Date: string;
    zoom18Date: string;
    subdivisionGeometryId: number | null;
    subdivisionGeometryBoundingBoxId: number | null;
    subdivisionGeometryBoundaryId: number | null;
    subdivisionGeometryIntelligenceBoundaryId: number;
    subdivisionGeometryIntelligenceBoundaryStatusId: number;
    subdivisionGeometryIntelligenceBoundaryStatusCode: string;
    subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string;
    nearMapImageDate: string;
    imageBoxId: number;
    mostRecentIPointBatchDate: string;
    iPoints: any | null;
    validatediPoints: any | null;
    subdivisionSpecificStatus: string;
  }



  

export interface SubDivisionInfo {
    id: Number,
    code: String,
    name: String,
    activeSections: Number,
    futureSections: Number,
    builtOutSections: Number,
    totalLots: Number,
    county: String,
    community: String,
    location: Location,
    survey: Survey,
    market: Market,
    status: Status,
    geometry: Geometry,
    image: Image,
    iPoint: IPoint
}

export interface Location {
    latitude: number,
    longitude: number
}

export interface Survey {
    surveyMethodId: number,
    surveyMethodCode: string,
    fieldSurveyTerritoryId: number,
    fieldSurveyTerritoryName: string
}

export interface Market {
    marketId: number,
    marketName: string,
    marketAbbreviation: string
}

export interface Status {
    subdivisionStatusId: number,
    subdivisionStatusCode: string
    subdivisionSpecificStatus: string
}

export interface Geometry {
    subdivisionGeometryId: number | null,
    subdivisionGeometryBoundingBoxId: number | null,
    subdivisionGeometryBoundaryId: number | null,
    subdivisionGeometryIntelligenceBoundaryId: number,
    subdivisionGeometryIntelligenceBoundaryStatusId: number,
    subdivisionGeometryIntelligenceBoundaryStatusCode: string,
    subdivisionGeometryIntelligenceBoundaryStatusChangeDate: string
}

export interface Image {
    nearMapImageDate: string,
    imageBoxId: number,
    zoom17Date: string,
    zoom18Date: string
}

export interface IPoint {
    mostRecentIPointBatchDate: String,
    iPoints: any,
    validatediPoints: any,
}



