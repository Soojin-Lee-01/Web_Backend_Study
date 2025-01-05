package com.group.libraryapp.domain.user;

import javax.persistence.*;

// 저장되고, 관리되어야하는 데이터
@Entity
public class User {

    // 이 필드를 primary key로 간주한다.
    @Id
    // primary key는 자동 생성되는 값이다.
    @GeneratedValue(strategy  = GenerationType.IDENTITY)
    private Long id = null;

    @Column(nullable = false, length = 20, name = "name") // name varchar(20)
    private String name;
    // 생략 가능 ~ 조건이 같다면!
    private Integer age;

    protected User(){

    };

    public Long getId() {
        return id;
    }

    public User(String name, Integer age) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException(String.format("잘못된 name(%s)이 들어왔습니다.", name));
        }
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public void updateName(String name) {
        this.name = name;
    }
}
