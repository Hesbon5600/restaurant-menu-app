import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MenuItemComponent } from "./menu-item.component";
import { MenuListComponent } from "../menu-list/menu-list.component";

describe("MenuItemComponent", () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemComponent, MenuListComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.item = {
      name: "Soup",
      choices: [
        { name: "Minestrone" },
        { name: "Hot and Sour" },
        { name: "Miso" }
      ],
      related: [
        {
          name: "Bread",
          choices: [{ name: "Breadsticks" }]
        }
      ]
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
