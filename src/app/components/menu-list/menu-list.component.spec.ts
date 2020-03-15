import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MenuListComponent } from "./menu-list.component";
import { MenuDataService } from "src/app/__services__/menu-data.service";
import { MenuItemComponent } from "../menu-item/menu-item.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("MenuListComponent", () => {
  let component: MenuListComponent;
  let fixture: ComponentFixture<MenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuListComponent, MenuItemComponent],
      imports: [HttpClientTestingModule],
      providers: [MenuDataService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
