import { TestBed } from "@angular/core/testing";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MenuDataService } from "./menu-data.service";

describe("MenuDataService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: MenuDataService = TestBed.get(MenuDataService);
    expect(service).toBeTruthy();
  });
});
