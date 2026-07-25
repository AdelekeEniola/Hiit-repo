import sys
import pygame
pygame.init()
screen = pygame.display.set_mode((800, 600))
clock = pygame.time.Clock()
pygame.display.set_caption("Our First Pygame Window!")
paddle = pygame.Rect(375, 550, 50, 10)
paddle_speed = 5
isRunning = True
while isRunning:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            isRunning = False
        keys = pygame.keys.pygame.key.get_pressed()
        if keys[pygame.K_LEFT]:
            paddle.x -= paddle_speed
        if keys[pygame.K_RIGHT]:
            paddle.x += paddle_speed
    screen.fill((0, 0, 0))
    pygame.draw.rect(screen,(255,255,255),paddle)
    pygame.display.flip()
    clock.tick(60)

pygame.quit()
sys.exit()