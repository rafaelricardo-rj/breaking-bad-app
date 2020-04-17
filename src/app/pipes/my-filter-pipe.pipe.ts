/*
* got this in https://www.codegrepper.com/code-examples/whatever/angular+filter+ngfor
* there are no name about this article in the site
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipePipe implements PipeTransform {

  transform(items: any[], filter: {season}): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.season.indexOf(filter.season) !== -1);
    }

}
