import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "arrayFilter"
})

export class BuilderFilterPipe implements PipeTransform {

    transform(value: any[], searchString: string) {

        if (!searchString) {
            return value
        }

        return value.filter(it => {
            const comments = it.comments.toString().includes(searchString)
            const company_name = it.company_name.toLowerCase().includes(searchString.toLowerCase())
            const contact_name = it.contact_name.toLowerCase().includes(searchString.toLowerCase())
            const description = it.description.toLowerCase().includes(searchString.toLowerCase())
            const id = it.id.toString().includes(searchString)
            const location_city = it.location_city.toLowerCase().includes(searchString.toLowerCase())
            const publish_date = it.publish_date.toString().includes(searchString)
            const title = it.title.toLowerCase().includes(searchString.toLowerCase())
            return (comments + company_name + contact_name + description + id + location_city + publish_date + title);
        })
    }
}