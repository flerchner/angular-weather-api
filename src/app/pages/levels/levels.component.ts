import {Component, Input, OnInit} from '@angular/core';
import { levels } from '../weather/levels';

@Component({
  selector: 'app-welcome',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.scss']
})
export class LevelsComponent implements OnInit {
  levels = levels;
  storageItem = false;
  currentLevel;
  storageArray = [];
  private s: number;
  constructor() { }
  ngOnInit() {
    if (localStorage.getItem('levelStorage') !== null) {
      this.storageItem = true;
      this.getLevels();
    }
  }
  // get Level by ID level.ts
  getLevelById(level) {
    this.currentLevel = levels.find(x => x.level === level);
  }
  // get Level by ID in Local Storage
  getLevelByIdStorage(level) {
    this.currentLevel = this.storageArray.find(x => x.level === level);
  }
  // edit Level with the ID which was clicked
  editThisLevel(level, name, tempMax, tempMin) {
    this.refreshLevels(level, name, tempMax, tempMin);
    this.setLocalStorage(name, level, tempMax, tempMin);
    window.alert('Edited Level ' + level);
  }
  // Add a new Level to StorageArray
  addThisLevel(name, level, tempMax, tempMin) {
    this.setLocalStorage(name, level, tempMax, tempMin);
    localStorage.setItem('highestLevel', level);
    levels.push({name, level, tempMax, tempMin});
    this.storageArray.push({name, level, tempMax, tempMin});
    window.alert('successfully added a new Level');
  }
  // Adding the Levels from levels.ts to the levels Array
  addLevels(name, level, tempMax, tempMin) {
    levels.push({name, level, tempMax, tempMin});
  }
  // Add the Level to the Storage- and levels Array
  addLevelsStorage(name, level, tempMax, tempMin) {
    levels.push({name, level, tempMax, tempMin});
    this.storageArray.push({name, level, tempMax, tempMin});
  }
  // Add the Storage-Items if they exist, otherwise get the normal Levels-Items
  getLevels() {
    if (this.storageItem === true) {
      if (localStorage.getItem('highestLevel') !== null) {
        this.s = Number(localStorage.getItem('highestLevel'));
      } else {
        this.s = 5;
        console.log(this.s);
      }
      for (let i = 0; i < this.s; i++) {
        const itemStorage = JSON.parse(localStorage.getItem('levelStorage-' + (i + 1)));
        if (itemStorage !== null) {
          this.addLevelsStorage(itemStorage.title, (i + 1), itemStorage.tempMax, itemStorage.tempMin);
        } else {
          if (i < 5) {
            this.storageArray.push(levels.find(x => x.level === i + 1));
          }
        }
      }
    }
  }
  // set The added or edited Data to the local Storage
  setLocalStorage(name, level, tempMax, tempMin) {
    const StorageItem = {
      title: name,
      level: level,
      tempMax: tempMax,
      tempMin: tempMin,
      levelTrigger: 'true'
    };
    localStorage.setItem('levelStorage', 'true');
    localStorage.setItem('levelStorage-' + level + '', JSON.stringify(StorageItem));
  }
  // refresh The Levels in here
  refreshLevels(level, name, tempMax, tempMin) {
    levels[level - 1].name = name;
    levels[level - 1].tempMax = tempMax;
    levels[level - 1].tempMin = tempMin;
    this.storageArray[level - 1].name = name;
    this.storageArray[level - 1].tempMax = tempMax;
    this.storageArray[level - 1].tempMin = tempMin;
  }
}
