import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  categorySearch:string="";

  @Output() categorySelected = new EventEmitter<string>();

  searchForm = new FormGroup({
    searchText: new FormControl('')
  });

  items: string[] = ['Mobile', 'Animation', 'Web Design', 'Illustration', 'Branding', 'Print'];
  filteredItems: string[] = [];

  onSearch() {
    const query = this.searchForm.get('searchText')?.value?.toLowerCase() || '';
    console.log(query);
    this.filteredItems = this.items.filter(item => item.toLowerCase().includes(query));
  }

  onSelect(item: string) {
    this.searchForm.get('searchText')?.setValue(item);
    
    this.filteredItems = [];
    
    this.categorySelected.emit(item);
    console.log(this.searchForm.get('searchText')?.value);
    let q = this.searchForm.get('searchText')?.value?.toLowerCase() || '';
    this.categorySearch=q;
    this.onCategorySelected(q);

  }

  constructor(private router: Router) {}

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }

  heroInfos: HeroInfo[] = [
    new HeroInfo('Chris Owens', 'Brand Designer', ['UI', 'Web', ' App'], 'assets/img/1.png'),
    new HeroInfo('Chris Owens', 'Brand Designer', ['UI', 'Web', ' App'], 'assets/img/2.png'),
    new HeroInfo('Chris Owens', 'Brand Designer', ['UI', 'Web', ' App'], 'assets/img/3.png'),
    new HeroInfo('Chris Owens', 'Brand Designer', ['UI', 'Web', ' App'], 'assets/img/1.png'),
    new HeroInfo('Chris Owens', 'Brand Designer', ['UI', 'Web', ' App'], 'assets/img/2.png'),
    new HeroInfo('Chris Owens', 'Brand Designer', ['UI', 'Web', ' App'], 'assets/img/3.png')
  ];
  Myimg: string = "assets/img/profilepic.jpg";
  design_Cards: designCard[] = [
    new designCard("Stona House", "assets/img/design_card1.jpg", this.Myimg, "chandru", true, 89, "163k", false, "mobile"),
    new designCard("Stona House", "assets/img/design_card2.jpg", this.Myimg, "kim", false, 40, "12.3k",true, "animation"),
    new designCard("Stona House", "assets/img/design_card3.jpg", this.Myimg, "ganesh", false, 30, "2.3k",false, "print"),
    new designCard("Stona House", "assets/img/design_card4.jpg", this.Myimg, "raaj", false, 20, "89.3k",false, "illustration"),
    new designCard("Stona House", "assets/img/design_card5.jpg", this.Myimg, "hari", false, 10, "9.3k",false, "print"),
    new designCard("Stona House", "assets/img/design_card6.jpg", this.Myimg, "allen", false, 60, "1.3k",false, "mobile")
  ];

  categories:category[]=[
  new category("Mobile","assets/img/design_card1.jpg",),
  new category("Animaion","assets/img/design_card2.jpg",),
  new category("Web Design","assets/img/design_card3.jpg",),
  new category("Illustration","assets/img/design_card4.jpg",),
  new category("Branding","assets/img/design_card5.jpg",),
  new category("Print","assets/img/design_card6.jpg",)
  ]
  toggleLike(card:any) {
    if (!card.like) { 
      card.likeCount++; 
      card.like=true;
      console.log("2");
    }
    else{
       card.likeCount--;
       card.like=false;
    }
  }
  toggle_bookmark(card:any) {
    if (!card.bookMark) { 
      card.bookMark=true;
    }
    else{
      card.bookMark=false;
    }
  }
  onCategorySelected(categories: string) {
    this.filterDesignCards(categories);
    console.log("onCategorySelected");
  }
  filteredDesignCards: designCard[] = this.design_Cards;
  
  filterDesignCards(category: string) { 
    if (category) {
      this.filteredDesignCards = this.design_Cards.filter(card =>
        card.categories.toLowerCase()===(this.categorySearch.toLowerCase())
      );
      console.log("filterDesignCards if");
      console.log(this.filteredDesignCards);
      console.log("design_Cards")
      console.log(this.design_Cards)
      console.log("category: ",category)
    } else {
      this.filteredDesignCards = this.design_Cards;
      console.log("filterDesignCards else");
    }
  }
}
export class HeroInfo {
  itemName: string;
  itemTitle: string;
  itemTags: string[];
  imgUrl: string;

  constructor(itemName: string, itemTitle: string, itemTags: string[], imgUrl: string) {
    this.itemName = itemName;
    this.itemTitle = itemTitle;
    this.itemTags = itemTags;
    this.imgUrl = imgUrl;
  }
}


export class designCard {
  title: string;
  imageUrl: string;
  profilepic: string;
  name: string;
  like: boolean;
  likeCount: number;
  views: string;
  bookMark:boolean;
  categories: string;


  constructor(title: string, imageUrl: string, profilepic: string, name: string, like: boolean, likeCount: number, views: string,bookMark:boolean,categories: string) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.profilepic = profilepic;
    this.name = name;
    this.like = like;
    this.likeCount = likeCount;
    this.views = views;
    this.bookMark = bookMark;
    this.categories = categories;
    
  }
}



export class category {
  itemTitle: string;
  imgUrl: string;

  constructor(itemTitle: string, imgUrl: string) {
    this.itemTitle = itemTitle;
    this.imgUrl = imgUrl;
  }
}