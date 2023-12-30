# Atividade Angular

<br>

## Criando projeto

- ng new atividade-angular

<br>

## Instalando Angular Material

- ng add @angular/material

<br>

## Instalando bootstrap

- npm install bootstrap

- angular.json:

```
"styles": [
	"@angular/material/prebuilt-themes/indigo-pink.css",
	"node_modules/bootstrap/dist/css/bootstrap.css",
	"src/styles.css"
	],
"scripts": [
	"node_modules/bootstrap/dist/js/bootstrap.js"
	]
```

<br>

## Componentes Angular Material (app.components.ts)

<br>

- Button (API):
```
import {MatButtonModule} from '@angular/material/button';
```

<br>

- Card (API):
```
import {MatCardModule} from '@angular/material/card';
```

<br>

- Form field (API):
```
import {MatFormFieldModule} from '@angular/material/form-field';
```

<br>

- Icon (API):
```
import {MatIconModule} from '@angular/material/icon';
```

<br>

- Input (API):
```
import {MatInputModule} from '@angular/material/input';
```

<br>

- Menu (API):
```
import {MatMenuModule} from '@angular/material/menu';
```

<br>

- Toolbar (API):
```
import {MatToolbarModule} from '@angular/material/toolbar';
```

<br>

## Criando e importando componentes

<br>

- ng generate component inicio

<br>

- app.component.ts:

```
import {InicioComponent} from './inicio/inicio.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InicioComponent,
...
```

<br>

## Importando Angular Material nos componentes

<br>

- "nome-do-componente".component.ts:

```
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatGridListModule
  ],
...
```

<br>

https://www.youtube.com/watch?v=LcYroNQNyIA&list=WL&index=4
20:00
	











<br>

## Aluno

### Lucas Araujo

<a href="https://www.linkedin.com/in/lucarauj"><img alt="lucarauj | LinkdeIN" width="40px" src="https://user-images.githubusercontent.com/43545812/144035037-0f415fc7-9f96-4517-a370-ccc6e78a714b.png" /></a>
