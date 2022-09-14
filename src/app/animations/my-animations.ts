import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const rotateAnimation = trigger('rotate', [
    state('start', style({
     transform: 'rotate(0deg)'
    })),
    state("end",style({
     transform: 'rotate(360deg)'
    })),
  transition('start => end', animate(500))
])


export const downAnimation = trigger('fallDown', [
  state('start', style({
    position: 'relative',
    transform: 'translate(0, 100%)',
  })),
  state("end",style({
    position: 'relative',
    transform: 'translate(0, 0)',
  })),
  transition('start => end', animate(500))
])


export const upAnimation = trigger('flyUp', [
  state('start', style({
    position: 'relative',
    transform: 'translate(0, -100%)',
  })),
  state("end",style({
    position: 'relative',
    transform: 'translate(0, 0)',
  })),
  transition('start => end', animate(500))
])

