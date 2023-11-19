import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent {
  searchQuery: string = '';
  categ = [
    { id: 1, name: 'Popular' },
    { id: 2, name: 'Following' },
    { id: 3, name: 'New & Noteworthy' }
  ];
  selectedCategory: string = 'Popular';

  constructor(private router: Router) {}

  goToPage(pageName: string): void {
    this.router.navigate([pageName]);
  }
  Myimg: string = "assets/img/profilepic.jpg";
  design_Cards: designCard[] = [
    new designCard("Stona House", "assets/img/design_card1.jpg", this.Myimg, "chandru", true, 89, "163k", false, ["Mobile", "Web Design"]),
    new designCard("Stona House", "assets/img/design_card2.jpg", this.Myimg, "kim", false, 40, "12.3k",true, ["Animation", "Web Design"]),
    new designCard("Stona House", "assets/img/design_card3.jpg", this.Myimg, "ganesh", false, 30, "2.3k",false, ["Print", "Branding"]),
    new designCard("Stona House", "assets/img/design_card4.jpg", this.Myimg, "raaj", false, 20, "89.3k",false, ["Illustration", "Animation"]),
    new designCard("Stona House", "assets/img/design_card5.jpg", this.Myimg, "hari", false, 10, "9.3k",false, ["Print", "Illustration"]),
    new designCard("Stona House", "assets/img/design_card6.jpg", this.Myimg, "allen", false, 60, "1.3k",false, ["Mobile", "Illustration"])
  ];

  categories:category[]=[
  new category("Mobile","assets/img/design_card1.jpg",),
  new category("Animaion","assets/img/design_card1.jpg",),
  new category("Web Design","assets/img/design_card1.jpg",),
  new category("Illustration","assets/img/design_card1.jpg",),
  new category("Branding","assets/img/design_card1.jpg",),
  new category("Print","assets/img/design_card1.jpg",)
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

filteredDesignCards: designCard[] = this.design_Cards;

filterDesignCards(category: string) {
  if (category) {
    this.filteredDesignCards = this.design_Cards.filter(card =>
      card.categories.includes(category.toLowerCase())
    );
  } else {
    this.filteredDesignCards = this.design_Cards;
  }
}
onCategorySelected(category: string) {
  this.filterDesignCards(category);
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
  categories: string[];


  constructor(title: string, imageUrl: string, profilepic: string, name: string, like: boolean, likeCount: number, views: string,bookMark:boolean,categories: string[]) {
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
