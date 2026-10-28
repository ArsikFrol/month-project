'use client'

import { useState } from "react"

import { Recipe } from "@/types/recipe"
import { Elem } from "./Elem"
import { Container } from "../UI/Container"
import { Modal } from "./Modal/Modal"

const recipes: Recipe[] = [
    { id: 'recipe_001', title: 'Паста карбонара', imageUrl: 'https://loremflickr.com/800/600/pasta?lock=101', ingredients: [{ name: 'Спагетти', amount: '200 г' }, { name: 'Бекон', amount: '100 г' }, { name: 'Яйца', amount: '2 шт' }, { name: 'Пармезан', amount: '50 г' }, { name: 'Чеснок', amount: '1 зубчик' }, { name: 'Соль', amount: 'по вкусу' }, { name: 'Перец чёрный', amount: 'по вкусу' }], steps: ['Отварите спагетти в подсоленной воде до аль денте.', 'Обжарьте бекон с чесноком на сковороде.', 'Взбейте яйца с тёртым пармезаном.', 'Смешайте горячие спагетти с беконом, снимите с огня.', 'Добавьте яично-сырную смесь, быстро перемешайте.', 'Поперчите и подавайте сразу.'] },
    { id: 'recipe_002', title: 'Омлет с сыром', imageUrl: 'https://loremflickr.com/800/600/omelette?lock=102', ingredients: [{ name: 'Яйца', amount: '3 шт' }, { name: 'Молоко', amount: '50 мл' }, { name: 'Сыр', amount: '50 г' }, { name: 'Масло сливочное', amount: '10 г' }, { name: 'Соль', amount: 'по вкусу' }, { name: 'Зелень', amount: 'по вкусу' }], steps: ['Взбейте яйца с молоком и солью.', 'Разогрейте сковороду с маслом.', 'Вылейте яичную смесь, готовьте на среднем огне.', 'Когда края схватятся, посыпьте тёртым сыром.', 'Сложите омлет пополам, посыпьте зеленью.'] },
    { id: 'recipe_003', title: 'Салат «Цезарь» с курицей', imageUrl: 'https://loremflickr.com/800/600/salad?lock=103', ingredients: [{ name: 'Куриная грудка', amount: '200 г' }, { name: 'Салат романо', amount: '1 кочан' }, { name: 'Пармезан', amount: '40 г' }, { name: 'Сухарики', amount: '50 г' }, { name: 'Соус цезарь', amount: '3 ст. л.' }, { name: 'Чеснок', amount: '1 зубчик' }], steps: ['Обжарьте куриную грудку до готовности, нарежьте полосками.', 'Порвите салат романо руками.', 'Смешайте салат с соусом и чесноком.', 'Добавьте курицу и сухарики.', 'Посыпьте тёртым пармезаном.'] },
    { id: 'recipe_004', title: 'Греческий салат', imageUrl: 'https://loremflickr.com/800/600/greek-salad?lock=104', ingredients: [{ name: 'Огурцы', amount: '2 шт' }, { name: 'Помидоры', amount: '3 шт' }, { name: 'Перец болгарский', amount: '1 шт' }, { name: 'Лук красный', amount: '0.5 шт' }, { name: 'Сыр фета', amount: '100 г' }, { name: 'Маслины', amount: '50 г' }, { name: 'Масло оливковое', amount: '2 ст. л.' }], steps: ['Нарежьте огурцы, помидоры, перец и лук крупными кусками.', 'Добавьте маслины и кубики феты.', 'Заправьте оливковым маслом.', 'Аккуратно перемешайте и подавайте.'] },
    { id: 'recipe_005', title: 'Куриный суп с лапшой', imageUrl: 'https://loremflickr.com/800/600/soup?lock=105', ingredients: [{ name: 'Куриная грудка', amount: '300 г' }, { name: 'Лапша', amount: '100 г' }, { name: 'Морковь', amount: '1 шт' }, { name: 'Лук', amount: '1 шт' }, { name: 'Картофель', amount: '2 шт' }, { name: 'Зелень', amount: 'по вкусу' }, { name: 'Соль', amount: 'по вкусу' }], steps: ['Сварите куриную грудку в 2 л воды.', 'Добавьте нарезанные морковь, лук и картофель.', 'Варите 15 минут.', 'Добавьте лапшу и варите ещё 5 минут.', 'Посолите, добавьте зелень и снимите с огня.'] },
    { id: 'recipe_006', title: 'Блины на молоке', imageUrl: 'https://loremflickr.com/800/600/pancakes?lock=106', ingredients: [{ name: 'Мука', amount: '200 г' }, { name: 'Молоко', amount: '500 мл' }, { name: 'Яйца', amount: '2 шт' }, { name: 'Сахар', amount: '1 ст. л.' }, { name: 'Соль', amount: 'щепотка' }, { name: 'Масло растительное', amount: '2 ст. л.' }], steps: ['Взбейте яйца с сахаром и солью.', 'Добавьте молоко и муку, замешайте однородное тесто.', 'Добавьте масло, перемешайте.', 'Жарьте блины на разогретой сковороде с двух сторон.'] },
    { id: 'recipe_007', title: 'Тушёная картошка с мясом', imageUrl: 'https://loremflickr.com/800/600/stew?lock=107', ingredients: [{ name: 'Картофель', amount: '6 шт' }, { name: 'Свинина', amount: '400 г' }, { name: 'Морковь', amount: '1 шт' }, { name: 'Лук', amount: '1 шт' }, { name: 'Томатная паста', amount: '2 ст. л.' }, { name: 'Соль', amount: 'по вкусу' }, { name: 'Перец', amount: 'по вкусу' }], steps: ['Обжарьте мясо до корочки.', 'Добавьте лук и морковь, обжаривайте 5 минут.', 'Добавьте томатную пасту и воду.', 'Добавьте нарезанный картофель, тушите 30 минут.', 'Посолите, поперчите и подавайте.'] },
    { id: 'recipe_008', title: 'Сырники из творога', imageUrl: 'https://loremflickr.com/800/600/cheesecakes?lock=108', ingredients: [{ name: 'Творог', amount: '500 г' }, { name: 'Яйца', amount: '1 шт' }, { name: 'Мука', amount: '3 ст. л.' }, { name: 'Сахар', amount: '2 ст. л.' }, { name: 'Соль', amount: 'щепотка' }, { name: 'Масло растительное', amount: 'для жарки' }], steps: ['Смешайте творог, яйцо, сахар и соль.', 'Добавьте муку, замешайте тесто.', 'Сформируйте сырники.', 'Обжарьте на разогретой сковороде с двух сторон до золотистой корочки.'] },
    { id: 'recipe_009', title: 'Плов с курицей', imageUrl: 'https://loremflickr.com/800/600/pilaf?lock=109', ingredients: [{ name: 'Рис', amount: '300 г' }, { name: 'Куриное филе', amount: '400 г' }, { name: 'Морковь', amount: '2 шт' }, { name: 'Лук', amount: '1 шт' }, { name: 'Чеснок', amount: '3 зубчика' }, { name: 'Специи для плова', amount: '1 ст. л.' }, { name: 'Масло растительное', amount: '3 ст. л.' }], steps: ['Обжарьте курицу до корочки.', 'Добавьте лук и морковь, обжаривайте 5 минут.', 'Добавьте рис и специи, перемешайте.', 'Залейте водой на 2 см выше риса.', 'Добавьте чеснок, накройте крышкой и тушите 20 минут.', 'Дайте настояться 10 минут перед подачей.'] },
    { id: 'recipe_010', title: 'Шоколадный брауни', imageUrl: 'https://loremflickr.com/800/600/brownie?lock=110', ingredients: [{ name: 'Шоколад тёмный', amount: '200 г' }, { name: 'Масло сливочное', amount: '150 г' }, { name: 'Сахар', amount: '200 г' }, { name: 'Яйца', amount: '3 шт' }, { name: 'Мука', amount: '100 г' }, { name: 'Какао', amount: '2 ст. л.' }, { name: 'Соль', amount: 'щепотка' }], steps: ['Растопите шоколад с маслом на водяной бане.', 'Взбейте яйца с сахаром до пышности.', 'Смешайте шоколадную массу с яйцами.', 'Добавьте муку, какао и соль, аккуратно перемешайте.', 'Вылейте в форму и выпекайте 25 минут при 180°C.', 'Дайте остыть и нарежьте квадратами.'] },
]

export function Favourites() {
    const [showElemId, setShowElemId] = useState<string>('')



    return (
        <Container>
            <>
                <div className='grid grid-cols-3 gap-[20px] my-[50px]'>
                    {
                        recipes.map((obj, i) => <Elem key={i} obj={obj} setShowElemId={setShowElemId} />)
                    }
                </div>
                {showElemId !== '' &&
                    <Modal setShowElemId={setShowElemId} obj={recipes.find(obj => obj.id === showElemId)!} />
                }
            </>
        </Container>
    )
}