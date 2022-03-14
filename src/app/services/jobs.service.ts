import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Jobs } from '../models/jobs';

@Injectable({
  providedIn: 'root'
})


export class JobsService {

  constructor() { 

    
  }
  private readonly _jobs: Jobs[] = [
    { id: 1, Title: "Développeur Sénior Front Angular", 
    Description: "Cette société fournit des outils, des technologies, des logiciels et des services de pointe pour tout le secteur de la construction. Présent depuis 75 ans sur le marché, elle bénéficie d'une réputation mondiale pour ses produits pionniers et ses inventions. Avec 29 000 personnes dans plus de 120 pays, elle opère via un modèle de vente directe et génère près de 250 000 interactions clients chaque jour.", 
    DateOfPublish: new Date(2022, 1, 3), 
    Location: "Nantes", 
    Salary: "55K-65K" },
    { id: 2, Title: "Developpeur Frontend React", 
    Description: "Cette Stratup construit le futur d'internet, rien de moins, en combinant la blockchain et le cloud leur technologie permet de créer la première place de marché distribuée permettant de monétiser les serveur.", 
    DateOfPublish: new Date(2022, 1, 3), 
    Location: "Paris", 
    Salary: "35K-45K" },
    { id: 3, Title: "Développeur front-end Vue.js", 
    Description: "Cette société à l'ambition, d’industrialiser, automatiser et standardiser le processus d’inspection automobile. Née en 2017 elle est en route pour devenir leader international en se basant sur l'IA. Déjà présente dans 13 pays, la phase de scaling commence maintenant !", 
    DateOfPublish: new Date(2022, 1, 10), 
    Location: "Limoges", Salary: "30K-48K" },
    { id: 4, Title: "Intégrateur / Développeur Front", 
    Description: "Cette startup est le leader de l’échange de données, elle permet aux entreprises d’orchestrer la circulation des données au sein de leur écosystème en sourçant, monétisant et échangeant des données directement entre elles, en toute sécurité (Maketplace et plateforme BTOB).", 
    DateOfPublish: new
    Date(2022, 1, 3), 
    Location: "Lyon", 
    Salary: "32K-42K" },
    ]
    
    observableJobs():Observable<Jobs[]>{
      return of(this._jobs)
      
    }     
 
    getJob(id: Number): Observable<Jobs|undefined>{
      if (this._jobs.find(x => x.id == id)!=null){
        return of(this._jobs.find(x => x.id == id))
      }
      return of(undefined)
    }

    setJobs(currentJobs : Jobs){
      currentJobs.id = this._jobs.length+1
      this._jobs.push(currentJobs)
    }

}
