import {
  trigger,
  transition,
  style,
  query,
  animate,
  group
} from '@angular/animations';

export const slideFadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0
      })
    ], { optional: true }),

    group([
      query(':leave', [
        animate('500ms ease', style({
          opacity: 0,
          transform: 'scale(0.95)'
        }))
      ], { optional: true }),

      query(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.95)'
        }),
        animate('500ms ease', style({
          opacity: 1,
          transform: 'scale(1)'
        }))
      ], { optional: true })
    ])
  ])
]);